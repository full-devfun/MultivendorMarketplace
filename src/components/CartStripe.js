import React, { Component } from 'react'
import styled from 'styled-components'
import Checkout from './Checkout'

const Wrapper = styled.div`
  border-top: 1px solid ${props => props.theme.border};
  padding-top: 2rem;
`;

class CartStripe extends Component {

  render() {

    const { type, buttonText } = this.props;

    return (
      <Wrapper>
        <Checkout
          handleSubmit={this.props.handleSubmit}
          type={type}
          buttonText={buttonText}
        />
      </Wrapper>
    );
  }

}

export default CartStripe;
