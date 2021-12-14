import React, { Component } from 'react'
import Card from "antd/lib/card";
import Rate from "antd/lib/rate";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import { ReactComponent as Logo } from './leaf.svg';
import { rateProduct } from '../actions/ProductActions'
import styled from "styled-components";

const { TextArea } = Input;

const Image = styled.picture`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 4px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 1fr 5fr;
`;

class RateProduct extends Component {

  state = {
    rating: 0,
    comment: this.props.comment || '',
    submitted: false
  }

  handleRatingChange = (rating) => {
    this.setState({ rating: rating })
  }

  handleCommentChange = (e) => {
    const { value } = e.target
    this.setState({ comment: value })
  }

  handleRate = () => {
    const user = {
      displayName: this.props.user.displayName,
      uid: this.props.user.uid
    }
    const { transaction, producer, product, items, index } = this.props;
    console.log(this.props)
    const { comment, rating } = this.state;

    rateProduct(
      transaction,
      producer,
      product,
      rating,
      user,
      comment,
      items,
      index
    ).then(() => {
      this.setState({
        submitted: true,
      });
    });
  }

  render() {

    const { title, thumbnail, image } = this.props;
    const { rating, comment, submitted } = this.state;

    if (this.props.rating) {
      return (
        <Card title={title}>
          <Wrapper>
            <Image>
              <img src={thumbnail || image} alt={title} />
            </Image>
            <div>
              <Rate
                character={<Logo />}
                value={this.props.rating}
                disabled={true}
                onChange={this.handleRatingChange}
              />
              <br />
              <br />
              {comment && <p>{comment}</p>}
            </div>
          </Wrapper>
        </Card>
      );
    } else {
      return (
        <Card title={title}>
          <Wrapper>
            <Image>
              <img src={thumbnail || image} alt={title} />
            </Image>
            <div>
              <Rate
                character={<Logo />}
                value={rating}
                disabled={submitted}
                onChange={this.handleRatingChange}
              />
              <br />
              <br />
              <TextArea
                disabled={submitted}
                value={comment}
                onChange={this.handleCommentChange}
              />
              <br />
              <br />
              <Button
                disabled={comment === "" || rating === 0 || submitted === true}
                onClick={this.handleRate}
              >
                Submit Review
              </Button>
            </div>
          </Wrapper>
        </Card>
      );
    }
  }

}

export default RateProduct;
