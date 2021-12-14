import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Button from './Button'
import { Avatar } from 'antd'
import ProfileMenu from './ProfileMenu'
import CartIcon from './CartIcon'
import { ReactComponent as Logo } from "./logo.svg";

const NavContainer = styled.nav`
  z-index: 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
`;

const Menu = styled.div`
  display: grid;
  width: 30px;
  grid-template-rows: 1fr 1fr 1fr;
  grid-gap: 8px;
  z-index: 100;
  cursor: pointer;

  span {
    height: 2px;
    width: 100%;
    border-radius: 4px;
    background: ${(props) => props.theme.secondary};
    transition: 0.2s all ease-in-out;

    &:first-of-type {
      transform-origin: top left;
      transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0deg)")};
    }

    &:nth-of-type(2n) {
      opacity: ${(props) => (props.open ? 0 : 1)};
    }

    &:last-of-type {
      transform-origin: bottom left;
      transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0deg)")};
    }
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  list-style: none;
  font-size: 24px;
  font-family: ${props => props.theme.body};
  color: ${props => props.theme.secondary};
`;

const Item = styled.li`
  margin-right: 2rem;
  display: flex;
  align-items: center;
  position: relative;

  .avatar {
    font-family: ${props => props.theme.sans};
    font-weight: 800;
    font-size: 16px;
    background: ${props => props.theme.secondary};
  }

  a {
    color: ${props => props.theme.secondary};
    text-decoration: none;

    &:hover {
      opacity: 0.6;
    }
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoDiv = styled.div`
  margin-left: 25px;
  margin-top: 10px;

  @media only screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    margin-left: 18px;

    .logo{
      width: 65%;
      height: auto;
    }
  }
`

const Nav = ({ toggleDropdown, user, cartCount, open, isBrowser }) => {

  const { loggedIn, photoURL, displayName } = user;

  const [profileOpen, setProfileOpen] = useState(false)

  return (
    <NavContainer>
      <LeftSide>
        <Menu open={open} onClick={toggleDropdown}>
          <span />
          <span />
          <span />
        </Menu>
        {/* {isBrowser ? ( */}
        <LogoDiv>
          <Link to="/">
            <Logo className="logo" />
          </Link>
        </LogoDiv>
        {/* ) : null} */}
      </LeftSide>
      <List>
        {isBrowser ? (
          <>
            {loggedIn ? (
              <>
                <Item>
                  <Link to="/shop">Shop</Link>
                </Item>
                <Item
                  onMouseEnter={() => setProfileOpen(true)}
                  onMouseLeave={() => setProfileOpen(false)}
                >
                  <Link to="/account">
                    {photoURL ? (
                      <Avatar src={photoURL} shape="circle" />
                    ) : (
                      <Avatar className="avatar" shape="circle">
                        {displayName ? displayName.charAt(0) : "A"}
                      </Avatar>
                    )}
                  </Link>
                  {profileOpen && (
                    <ProfileMenu user={user} toggleOpen={setProfileOpen} />
                  )}
                </Item>
              </>
            ) : (
              <>
                <Item>
                  <Link to="/login">Shop</Link>
                </Item>
                <Item>
                  <Link to="/login">Login</Link>
                </Item>
                <Item>
                  <Link to="/register">
                    <Button>Sign Up</Button>
                  </Link>
                </Item>
              </>
            )}
          </>
        ) : (
          <Item>
            <Link to="/shop">Shop</Link>
          </Item>
        )}
        {loggedIn && (
          <Item>
            <Link to="/cart">
              <CartIcon count={cartCount} />
            </Link>
          </Item>
        )}
      </List>
    </NavContainer>
  );
}

export default Nav;
