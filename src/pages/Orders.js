import React, { Component } from "react";
import styled from "styled-components";
import { Card } from "antd";
import { connect } from "react-redux";
import { rateProduct } from "../actions/ProductActions";
import { fetchUserTransactions } from "../actions/TransactionActions";
import RateProduct from "../components/RateProduct";
import { device } from "../utils/devices";
import PastOrders from "../components/PastOrders";
import UpcomingOrder from "../components/UpcomingOrder";

// const Wrapper = styled.div`
//   width: 90vw;
//   margin: 7rem auto 3rem;
//   z-index: -2;
// `;

const Wrapper = styled.div`
  width: 90vw;
  margin: 160px auto 2rem;
  min-height: calc(100vh - 112px);
  color: ${(props) => props.theme.secondary};

  h1 {
    font-family: ${(props) => props.theme.body};
    font-weight: normal;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  h2 {
    font-family: ${(props) => props.theme.body};
    font-weight: normal;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`;

const OrderCard = styled.div`
  margin-bottom: 1rem;
`;
const Item = styled.div`
  margin-bottom: 1rem;
`;

const Count = styled.div`
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 10px;

  h1 {
    width: 100%;
    text-align: right;
    border: none;
  }
`;

const Image = styled.picture`
  width: 100%;
  padding-bottom: 100%;
  position: relative;
  display: block;
  overflow: hidden;
  margin-bottom: 1rem;
  border-radius: 4px;
  color: black;
  text-shadow: 1px 0px 1px white, -1px 0px 1px white, 0px 1px 1px white,
    0px -1px 1px white;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 0;
  }

  span {
    position: absolute;
    background-image: linear-gradient(rgba(0, 0, 0, 0), white);
    padding: 10px;
    margin-top: 40%;
    height: 60%;
    width: 100%;
    z-index: 1;
  }
`;

const Titles = styled.div`
  position: absolute;
  bottom: 5px;
  left: 10px;
`;

const List = styled.div`
  width: 100%;
  margin-top: 2.5vw;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2.5vw;

  @media ${device.laptop} {
    margin-top: 2.5vw;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 2.5vw;
  }
`;

const Section = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: ${(props) => (props.columns ? `grid` : `block`)};
  grid-template-columns: ${(props) =>
    props.columns ? `repeat'('${props.columns}, 1fr)` : `auto`};
  grid-gap: 2rem;
`;

function capital_letter(str) {
  str = str.split(" ");

  for (var i = 0, x = str.length; i < x; i++) {
    str[i] = str[i][0].toUpperCase() + str[i].substr(1);
  }

  return str.join(" ");
}

class Orders extends Component {
  componentDidMount() {
    this.props.fetchUserTransactions(this.props.user.uid);
  }

  render() {
    if (this.props.transactions) {
      return (
        <Wrapper>
          <h1>Orders</h1>
          {Object.keys(this.props.transactions).length > 0 && (
            <Section>
              <h2>Upcoming Order</h2>
              {this.props.user.uid && (
                <UpcomingOrder
                  uid={this.props.user.uid}
                  orders={this.props.transactions}
                />
              )}
            </Section>
          )}
          <Section>
            <h2>Past Orders</h2>
            {this.props.user.uid && <PastOrders />}
          </Section>
          <Section>
            <h2>Rate your products</h2>
            {this.props.transactions &&
              Object.keys(this.props.transactions)
                .sort((a, b) => {
                  return (
                    this.props.transactions[b].created_at -
                    this.props.transactions[a].created_at
                  );
                })
                .map((transaction, index) => (
                  <OrderCard key={`${transaction}-orderCard-${index}`}>
                    {this.props.transactions[transaction].status ===
                    "delivered" ? (
                      <>
                        {this.props.transactions[transaction].items && (
                          <Card
                            key={`${transaction}-Card-${index}`}
                            title={`Order #${transaction}`}
                          >
                            <>
                              {Object.keys(
                                this.props.transactions[transaction].items
                              ).map((item, index) => {
                                return (
                                  <Item key={`${transaction}-Item-${index}`}>
                                    <RateProduct
                                      key={`${transaction}-RateProduct-${index}`}
                                      index={index}
                                      user={this.props.user}
                                      items={
                                        this.props.transactions[transaction]
                                          .items
                                      }
                                      image={
                                        this.props.transactions[transaction]
                                          .items[item].image
                                      }
                                      transaction={transaction}
                                      product={
                                        this.props.transactions[transaction]
                                          .items[item].uid
                                      }
                                      producer={
                                        this.props.transactions[transaction]
                                          .items[item].producer
                                      }
                                      title={
                                        this.props.transactions[transaction]
                                          .items[item].title
                                      }
                                      rating={
                                        this.props.transactions[transaction]
                                          .items[item].rating
                                      }
                                      comment={
                                        this.props.transactions[transaction]
                                          .items[item].comment
                                      }
                                    />
                                  </Item>
                                );
                              })}
                            </>
                          </Card>
                        )}
                      </>
                    ) : (
                      <>
                        {this.props.transactions[transaction].items && (
                          <Card
                            key={`${transaction}-Card-${index}`}
                            title={`Order #${transaction}`}
                            actions={[
                              <>
                                {capital_letter(
                                  this.props.transactions[transaction].status
                                )}
                              </>,
                            ]}
                          >
                            <List>
                              {Object.keys(
                                this.props.transactions[transaction].items
                              ).map((item, index) => {
                                return (
                                  <Image key={`${transaction}-Item-${index}`}>
                                    <a
                                      href={`/product/${this.props.transactions[transaction].items[item].uid}`}
                                    >
                                      <img
                                        alt=""
                                        src={
                                          this.props.transactions[transaction]
                                            .items[item].thumbnail ||
                                          this.props.transactions[transaction]
                                            .items[item].image
                                        }
                                      />
                                      <Count>
                                        <h1>
                                          x
                                          {
                                            this.props.transactions[transaction]
                                              .items[item].count
                                          }
                                        </h1>
                                      </Count>
                                      <span>
                                        <Titles>
                                          <h3>
                                            {
                                              this.props.transactions[
                                                transaction
                                              ].items[item].title
                                            }
                                          </h3>
                                          <h4>
                                            {
                                              this.props.transactions[
                                                transaction
                                              ].items[item].producerName
                                            }
                                          </h4>
                                        </Titles>
                                      </span>
                                    </a>
                                  </Image>
                                );
                              })}
                            </List>
                          </Card>
                        )}
                      </>
                    )}
                  </OrderCard>
                ))}
          </Section>
        </Wrapper>
      );
    } else {
      return null;
    }
  }
}

export default connect(
  (state, ownProps) => ({
    user: state.user,
    transactions: state.transactions,
  }),
  { fetchUserTransactions, rateProduct }
)(Orders);
