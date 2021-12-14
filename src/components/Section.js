import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { device } from '../utils/devices';

const Wrapper = styled.section`
  background: ${props => props.bg ? props.bg : 'white'};
  padding: 4rem 5vw;

  @media ${device.laptop}{
    padding: 4rem 5vw;
  }

  h3 {
    text-align: ${props => props.leftTitle ? `left` : `center`};
    font-family: ${props => props.theme.body};
    font-weight: 400;
    font-size: 36px;
    text-transform: capitalize;
  }
`;

const Inner = styled.div`
  @media (min-width: 500px) {
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns / 2}, 1fr);
    grid-gap: 2rem;
  }

  @media ${device.laptop} {
    display: grid;
    grid-template-columns: repeat(${(props) => props.columns}, 1fr);
    grid-gap: 2rem;
  }
`;

const Section = ({ children, columns, bg, title, leftTitle }) => (
  <Wrapper bg={bg} leftTitle={leftTitle}>
    <h3>{title}</h3>
    <Inner columns={columns}>
      {children}
    </Inner>
  </Wrapper>
);

Section.propTypes = {
  columns: PropTypes.number,
  children: PropTypes.node,
  bg: PropTypes.any,
  title: PropTypes.string
}

export default Section;
