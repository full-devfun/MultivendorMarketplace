import React, { Component } from 'react'
import { CardElement } from 'react-stripe-elements'
import styled from 'styled-components';

const CardInput = styled.div`
  background: white;
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  font-family: ${props => props.theme.sans};
  color: ${props => props.theme.secondary};
  background: rgba(0,0,0,0.04);
`;

class CardSection extends Component {
  render() {
    return (
      <CardInput>
        <CardElement />
      </CardInput>
    );
  }
}

export default CardSection;