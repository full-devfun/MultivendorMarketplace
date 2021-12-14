import React from 'react'
import styled from 'styled-components'
import bag from '../images/bag.svg'

const Bag = styled.div`
  width: 2rem;
  height: calc(2.5rem - 6px);
  background: url(${bag});
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 6px;
  font-size: 13px;
  font-weight: 600;
  font-family: ${props => props.theme.sans};
  color: ${props => props.theme.secondary};
`;

const CartIcon = ({ count }) => (
  <Bag><span>{count}</span></Bag>
);

export default CartIcon;
