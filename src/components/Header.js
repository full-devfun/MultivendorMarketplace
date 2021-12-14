import React, { Component } from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';
// import { Link } from "react-router-dom";
import Nav from './Nav'
// import CartIcon from './CartIcon'
import NavDropdown from './NavDropdown';
import { isBrowser } from 'react-device-detect';
import { connect } from 'react-redux';
import { loginUser } from '../actions/UserActions';
// import MobileNav from './MobileNav'

const Wrapper = styled.header`
  position: fixed;
  transform: translateZ(0);
  top: 0;
  height: fit-content;
  background: white;
  box-shadow: 0px 2px 20px 0px rgba(0,0,0,0.05);
  width: 100vw;
  padding: 10px;
  box-sizing: border-box;
  z-index: 10;

  @media ${device.laptop}{
    padding: 10px 5vw;
  }

  .logo {
    position: relative;
    z-index: 4;
  }
`;

class Header extends Component {

  state = {
    navOpen: false
  }

  toggleDropdown = () => {
    this.setState({ navOpen: !this.state.navOpen });
  }

  render(){

    const { navOpen } = this.state;
    const { user } = this.props;

    return (
      <Wrapper>
        <Nav
          user={user}
          open={navOpen}
          isBrowser={isBrowser}
          toggleDropdown={this.toggleDropdown}
          cartCount={Object.keys(this.props.cart).length}
        />
        {navOpen ? (
          <NavDropdown toggleDropdown={this.toggleDropdown} user={user} />
        ) : null}
        {/* {!isBrowser && (
          <Link to="/cart">
            <CartIcon count={Object.keys(this.props.cart).length} />
          </Link>
        )} */}
      </Wrapper>
    );
  }
}

export default connect((state, ownProps) => ({
  user: state.user,
  cart: state.cart
}), { loginUser })( Header );
