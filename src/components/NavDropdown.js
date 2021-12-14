import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { device } from '../utils/devices'

const Dropdown = styled.div`
  position: fixed;
  top: 70px;
  left: 0;
  width: 90vw;
  z-index: 100;
  display: grid;
  box-sizing: border-box;
  height: 100vh;
  background: ${(props) => props.theme.highlight};
  font-family: ${(props) => props.theme.sans};
  color: ${(props) => props.theme.secondary};
  overflow: scroll;
  -webkit-overflow-scrolling: touch;

  ::-webkit-scrollbar {
    display: none;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(5, 1fr);
    top: 0;
    height: 100vh;
    width: 17rem;
  }
`;

const Sidebar = styled.aside`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  overflow: hidden;
  background-color: ${(props) => props.theme.secondary};
  -webkit-transform: translateZ(0);
  visibility: visible;
  -webkit-backface-visibility: hidden;
`;

const Header = styled.header`
  background-color: lightgray;
  width: 100%;
  display: block;
  padding: 0.75em 1em;
  font-size: 1.4em;
`;

const SidebarNav = styled.nav`
  position: fixed;
  background-color: white;
  height: 100%;
  font-family: ${(props) => props.theme.body};
  font-weight: 400;
  font-size: 1.4em;
  overflow: auto;
  padding-bottom: 6em;
  z-index: 9;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  width: 100%;

  ul {
    list-style: none;
    display: block;
    padding: 0;
    margin: 0;
    width: 100%;

    li {
      margin-left: 0;
      padding-left: 0;
      display: inline-block;
      width: 100%;

      a {
        color: black;
        font-size: 0.75em;
        padding: 1.05em 1em;
        position: relative;
        display: block;

        &:hover {
          color: whitesmoke;
          background-color: rgba(0, 0, 0, 0.9);
          @include transition(all 0.6s ease);
        }
      }
    }
  }
`;



const NavDropdown = ({ toggleDropdown, user }) => {
  const { loggedIn } = user;
  return (
    <Dropdown
      onMouseLeave={() => {
        toggleDropdown();
      }}
      onClick={() => {
        toggleDropdown();
      }}
    >
      <Sidebar>
        <Header>Menu</Header>
        <SidebarNav>
          <ul>
            <li>
              <Link to="/">
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link to={`/${loggedIn ? "shop" : "login"}`}>
                <span>Shop</span>
              </Link>
            </li>
            <li>
              <Link to={`/${loggedIn ? "producers" : "login"}`}>
                <span>Producers</span>
              </Link>
            </li>
            {loggedIn ? (
              <li>
                <Link to="/orders">
                  <span>Orders</span>
                </Link>
                <Link to="/following">
                  <span>Following</span>
                </Link>
                <Link to="/account">
                  <span>Settings</span>
                </Link>
              </li>
            ) : (
              <>
                <li>
                  <Link to="/register">
                    <span>Sign Up</span>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <span>Login</span>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </SidebarNav>
      </Sidebar>
    </Dropdown>
  );};

export default NavDropdown;
