import React, { Component } from "react";
import styled from "styled-components";

const StyledCounter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const Count = styled.div`
  padding: 0.5rem;
  color: ${props => props.theme.secondary};
  background: ${props => props.theme.primary};
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
`;

const AddSub = styled.button`
  padding: 0.5rem;
  font-size: 30px;
  font-weight: 300;
  color: ${props => props.theme.highlight};
  background: ${props => props.theme.primary};
  cursor: pointer;
  outline: 0;
  appearance: none;
  border: 0;

  &:first-of-type {
    border-radius: 5px 0 0 5px;
  }

  &:last-of-type {
    border-radius: 0 5px 5px 0;
  }

  &:hover {
    color: #dd9772;
  }
`;

class Counter extends Component {
  addtoCount = () => {
    const { user, id, count } = this.props;
    const newCount = count + 1;
    this.props.updateItem(user, id, newCount).then(() => {
      this.props.fetchCart(user);
    });
  };

  subtractFromCount = () => {
    const { user, id, count, item } = this.props;
    console.log(user)
    const newCount = count - 1;
    if (newCount === 0) {
      this.props.removeFromCart(user, item).then(() => {
        this.props.fetchCart(user);
      });
    } else {
      this.props.updateItem(user, id, newCount).then(() => {
        this.props.fetchCart(user);
      });
    }
  };

  render() {
    const { count } = this.props;

    return (
      <StyledCounter>
        <AddSub onClick={this.subtractFromCount}>-</AddSub>
        <Count>{count}</Count>
        <AddSub onClick={this.addtoCount}>+</AddSub>
      </StyledCounter>
    );
  }
}

export default Counter;
