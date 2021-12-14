import React, { Component } from "react";
import styled from "styled-components";
import CartTableItem from "./CartTableItem";
import { device } from "../utils/devices";

const Wrapper = styled.div`
  padding: 0 5vw;
  margin-top: 4rem;
`;

const Table = styled.div``;

const Header = styled.div`
  display: none;
  grid-template-columns: 3fr 1fr 1fr 1fr;
  grid-gap: 2rem;
  margin-bottom: 2rem;
  font-family: ${props => props.theme.sans};

  @media ${device.laptop} {
    display: grid;
  }
`;

class CartTable extends Component {
  renderCartItems = items => {
    return items.map((item, index) => {
      const { image, title, price, unit, count, uid, id, producer, producerName } = item;
      return (
        <CartTableItem
          key={id}
          uid={uid}
          image={image}
          id={id}
          producer={producer}
          title={title}
          unit={unit}
          count={count}
          price={price}
          handleTotal={this.props.handleTotal}
          producerName={producerName}
        />
      );
    });
  };

  render() {
    const { items } = this.props;

    return (
      <Wrapper>
        <Header>
          <span>Product details</span>
          <span>Price per unit</span>
          <span>Total</span>
        </Header>
        <Table>{this.renderCartItems(items)}</Table>
      </Wrapper>
    );
  }
}

export default CartTable;
