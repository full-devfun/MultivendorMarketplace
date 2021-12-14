import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
`;

const Menu = styled.div`
  display: grid;
  width: 30px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 8px;
  position: relative;
  z-index: 100;
  cursor: pointer;

  span {
    height: 2px;
    width: 100%;
    border-radius: 4px;
    background: ${props => props.theme.secondary};
    transition: 0.2s all ease-in-out;

    &:first-of-type {
      transform-origin: top left;
      transform: ${props => props.open ? 'rotate(45deg)' : 'rotate(0deg)' };
    }

    &:nth-of-type(2n){
      opacity: ${props => props.open ? 0 : 1 };
    }

    &:last-of-type {
      transform-origin: bottom left;
      transform: ${props => props.open ? 'rotate(-45deg)' : 'rotate(0deg)' };
    }
  }
`;

class MobileNav extends Component {

  render() {

    const { open, toggleDropdown } = this.props;

    return (
      <Wrapper>
        <Menu
          open={open}
          onClick={toggleDropdown}
        >
          <span /><span /><span />
        </Menu>
      </Wrapper>
    );
  }

}

export default MobileNav;
