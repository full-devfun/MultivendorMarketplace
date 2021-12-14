import React from "react";
import styled from "styled-components";
import { logoutUser, LOGOUT_USER } from "../actions/UserActions";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { CLEAR_CART } from "../actions/CartActions";
import { auth } from "../Firebase";

const Container = styled.div`
  position: absolute;
  top: 50%;
  right: -32px;
  z-index: 1;
  margin-top: 20px;
`;

const Menu = styled.div`
  background: ${(props) => props.theme.primary};
  border-radius: 4px;
  margin-top: 2rem;
  box-shadow: 3px 3px 8px 1px rgba(0, 0, 0, 0.12);
  font-family: ${(props) => props.theme.sans};
  font-size: 14px;
  font-weight: 600;
  position: relative;
  pointer-events: auto;

  &:before {
    content: "";
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 16px 20px 16px;
    border-color: transparent transparent ${(props) => props.theme.primary}
      transparent;
    position: absolute;
    right: 2rem;
    top: -20px;
  }
`;

const Top = styled.div`
  padding: 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  line-height: 1.5em;

  span {
    display: block;
  }

  .email {
    opacity: 0.4;
  }
`;

const MenuNav = styled.ul`
  padding: 1rem 2rem;
  border-bottom: 1px solid ${(props) => props.theme.border};
  margin: 0;
  list-style: none;
  line-height: 2em;

  a {
    color: ${(props) => props.theme.secondary};
  }
`;

const Actions = styled.div`
  padding: 1rem 2rem;

  button {
    padding: 0;
    appearance: none;
    border: 0;
    color: ${(props) => props.theme.secondary};
    font-size: 14px;
    cursor: pointer;
    outline: 0;
    background: ${(props) => props.theme.primary};
  }
`;

const ProfileMenu = ({ user, dispatch }) => {
  const history = useHistory();

  const handleClick = (event) => {
    dispatch({ type: CLEAR_CART });
    dispatch({ type: LOGOUT_USER });
    auth.signOut().then(() => history.push("/"));

    // window.location.reload(false);
  };

  return (
    <Container>
      <Menu>
        <Top>
          <span>{user.displayName}</span>
          <span className="email">{user.email}</span>
        </Top>
        <MenuNav>
          <li>
            <Link to="/orders">Orders</Link>
          </li>
          <li>
            <Link to="/following">Following</Link>
          </li>
          <li>
            <Link to="/account">Settings</Link>
          </li>
        </MenuNav>
        <Actions>
          <button onClick={handleClick}>Logout</button>
        </Actions>
      </Menu>
    </Container>
  );
};

export default connect()(ProfileMenu);
