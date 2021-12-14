import React from 'react';
import styled from 'styled-components';
import check from '../images/checkmark.svg';

const Check = styled.span`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background: url(${check});
  background-size: 100%;
  display: block;
  background-repeat: no-repeat;
`;

const Checkmark = ({ size }) => (
  <Check size={size}></Check>
);

export default Checkmark;
