import React, { Component } from "react";
import styled from "styled-components";
import { fetchUserProducts, fetchProducer } from "../actions/ProductActions";
import { followProducer, unfollowProducer } from "../actions/UserActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import Section from "../components/Section";
import ProductCard from "../components/ProductCard";
import { ReactComponent as Logo } from "../components/leaf.svg";
import { Avatar, Rate, Icon } from "antd";
import Button from "../components/Button";
import ProducerOpenHouse from "../components/ProducerOpenHouse";
import { db } from "../Firebase";
import { firebase } from "@firebase/app";

const Wrapper = styled.div`
  margin-top: 6rem;
`;

const Desc = styled.div`
  color: ${props => props.theme.secondary};
  margin-top: 1rem;
  padding-bottom: 2rem;
  grid-column: span 4;
  border-bottom: 1px solid ${props => props.theme.border};
  display: flex;
  justify-content: space-between;

  h4 {
    font-weight: 600;
    font-size: 16px;
    color: ${props => props.theme.secondary};
    font-family: ${props => props.theme.sans};
  }
`;

const Followers = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.12);
  border-radius: 4px;
  width: 120px;
  text-align: center;
  padding: 0.5rem;
  margin: 1rem 0;
`;

class Producer extends Component {
  state = {
    producer: {},
    products: {},
    isLoaded: false
  };

  fetchUserProducts = (user) => {
    db.collection("products")
      .where(`producers`, "array-contains", { [`${user}`]: true })
      .get()
      .then(async (snapshot) => {
        let array = [];
        if (!snapshot.empty) {
          await snapshot.forEach(async (doc) => {
            const snap2 = await db
              .collection("products")
              .doc(doc.data().id)
              .collection("producers")
              .doc(user)
              .get();

            if (snap2.data() && snap2.data().product) {
              array = [{ id: snap2.data().product, ...snap2.data() }, ...array];
              this.setState({ products: array, isLoaded: true });
            }
          });
        }
      });
  }

  componentDidMount() {
    const user = this.props.match.params.uid;
    this.props.fetchProducer(user).then(producer => {
      this.setState({ producer: producer });
      this.addPageView();
      this.fetchUserProducts(user);
    });
  }

  handleFollow = () => {
    const user = this.props.user.uid;
    const producer = this.props.match.params.uid;

    this.props
      .followProducer(user, producer)
      .then(() => {
        return this.props.fetchProducer(producer);
      })
      .then(res => this.setState({ producer: res }));
  };

  handleUnFollow = () => {
    const user = this.props.user.uid;
    const producer = this.props.match.params.uid;

    this.props
      .unfollowProducer(user, producer)
      .then(() => {
        return this.props.fetchProducer(producer);
      })
      .then(res => this.setState({ producer: res }));
  };

  addPageView = () => {
    const producer = this.props.match.params.uid;

    const date = new Date();
    const year = date.getFullYear();
    const month = `${date.getMonth() + 1}`.padStart(2, "0");
    const day = `${date.getDay()}`.padStart(2, "0");

    return db
      .collection("producers")
      .doc(producer)
      .collection("analytics")
      .doc(`${year}-${month}-${day}`)
      .update({
        views: firebase.firestore.FieldValue.increment(1)
      });
  };

  render() {
    return (
      <Wrapper>
        {this.state.isLoaded ? (
          <>
            {this.state.producer ? (
              <Section columns={4}>
                <Desc>
                  <div>
                    <Avatar
                      size="large"
                      shape="square"
                      src={this.state.producer.photoURL}
                    />
                    <br />
                    <br />
                    <h4>{this.state.producer.displayName}</h4>
                    {this.state.producer.bio && (
                      <p>{this.state.producer.bio}</p>
                    )}
                    {this.state.producer.followers ? (
                      this.state.producer.followers.length > 1 ? (
                        <Followers>
                          {this.state.producer.followers.length} followers
                        </Followers>
                      ) : (
                        <>
                          {this.state.producer.followers.length === 1 ? (
                            <Followers>1 follower</Followers>
                          ) : (
                            <Followers>0 followers</Followers>
                          )}
                        </>
                      )
                    ) : (
                      <Followers>0 followers</Followers>
                    )}
                    <p>
                      <Rate
                        character={<Icon component={Logo} />}
                        disabled
                        value={this.state.producer.rating || 0}
                      />
                    </p>
                    <br />
                    {this.props.user.loggedIn && (
                      <>
                        {this.state.producer.followers.indexOf(
                          this.props.user.uid
                        ) > -1 ? (
                          <Button onClick={this.handleUnFollow}>
                            Unfollow
                          </Button>
                        ) : (
                          <Button onClick={this.handleFollow}>Follow</Button>
                        )}
                      </>
                    )}
                  </div>
                  {this.state.producer.openHouse && (
                    <ProducerOpenHouse date={this.state.producer.openHouse} />
                  )}
                </Desc>
                {this.state.products &&
                  Object.keys(this.state.products).map((item) => {
                    const {
                      title,
                      image,
                      ratingTotal,
                      ratingCount,
                      description,
                      tags,
                      product,
                      price,
                      unit,
                    } = this.state.products[item];
                    return (
                      <ProductCard
                        title={title}
                        id={product}
                        image={image}
                        rating={ratingTotal / ratingCount || 0}
                        description={description}
                        tags={tags}
                        unit={unit}
                        url={`/product/${product}/${this.props.match.params.uid}`}
                        price={price}
                        showRating
                        singleProducer
                      />
                    );
                  })}
              </Section>
            ) : (
              <h1 style={{ margin: "250px auto" }}>404 Producer not found</h1>
            )}
          </>
        ) : null}
      </Wrapper>
    );
  }
}

export default withRouter(
  connect(
    (state, ownProps) => ({
      user: state.user
    }),
    { fetchUserProducts, fetchProducer, followProducer, unfollowProducer }
  )(Producer)
);
