import React, { Component } from "react";
import styled from "styled-components";
import Counter from "./Counter";
import { connect } from "react-redux";
import { fetchCart, updateItem, removeFromCart } from "../actions/CartActions";
import Button from "./Button";
import { device } from "../utils/devices";

const Item = styled.div`
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  font-size: 18px;
  border-bottom: 1px solid ${props => props.theme.border};

  h3 {
    font-size: 18px;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: 3fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media only screen and (max-width: 480px) {
    .delete {
      width: 30%;
    }
  }
`;

const Info = styled.div`
  display: grid;
  grid-gap: 0rem;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 1rem;

  @media ${device.laptop} {
    margin: 0;
  }

  h3 {
    font-family: ${props => props.theme.body};
    font-weight: normal;
    margin: 0 0 1rem 0;
  }

  button {
    width: 100%;
  }
`;

const Image = styled.div`
  width: 45vw;
  height: 100%;
  border-radius: 4px;
  overflow: hidden;

  @media ${device.laptop} {
    width: 8vw;
    height: 100%;
  }

  @media only screen and (max-width: 480px) {
    width: 40vw;
    height: 40vw;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Price = styled.div`
  display: flex;
  justify-content: space-between;

  @media ${device.laptop} {
    display: block;
  }
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

const Bold = styled.div`
  font-weight: bold;
`;

const Vertical = styled.div`
  margin-top: 1rem;
`;

class CartTableItem extends Component {
  render() {
    const {
      id,
      unit,
      title,
      image,
      price,
      count,
      updateItem,
      removeFromCart,
      fetchCart,
      producerName
    } = this.props;

    return (
      <Item>
        <Info>
          <div>
            <Image>
              <img alt={title} src={image} />
            </Image>
          </div>
          <Vertical>
            <h3>
              <Bold>{title}</Bold>
              <br></br>
              {producerName}
            </h3>
          </Vertical>
        </Info>
        <Price>
          <div>
            {unit === "each" ? (
              <Vertical>
                ${Number(price).toFixed(2)} {unit}
              </Vertical>
            ) : (
              <Vertical>
                ${Number(price).toFixed(2)} per {unit}
              </Vertical>
            )}
          </div>
        </Price>
        <Vertical>${(price * count).toFixed(2)}</Vertical>
        <Flex>
          <Counter
            user={this.props.user.uid}
            item={{ id, unit, title, image, price, count }}
            count={count}
            updateItem={updateItem}
            removeFromCart={removeFromCart}
            id={id}
            fetchCart={fetchCart}
          />
          <Button
            secondary
            className="delete"
            onClick={() => {
              removeFromCart(this.props.user.uid, {
                id,
                unit,
                title,
                image,
                price,
                count,
              }).then(() => {
                this.props.fetchCart(this.props.user.uid);
              });
            }}
          >
            Delete
          </Button>
        </Flex>
      </Item>
    );
  }
}

export default connect(
  (state, ownProps) => ({
    user: state.user,
    cart: state.cart
  }),
  { fetchCart, updateItem, removeFromCart }
)(CartTableItem);
