import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { device } from '../utils/devices'

const StyledButton = styled.button`
  background: ${props => props.secondary ? 'transparent' : props.theme.primary};
  color: ${props => props.theme.secondary};
  transition: 0.2s all ease-in-out;
  padding: ${props => props.size === 'small' ? `0.5rem 1rem` : `1rem`};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer' };
  font-family: ${props => props.theme.sans};
  border-radius: 4px;
  border: ${props => props.secondary ? `1px solid ${props.theme.border}` : 0 };
  font-size: ${props => props.size === 'large' ? '20px' :
    props.size === 'small' ? '14px' : '16px'
  };
  flex: none;
  width: 100%;
  text-align: center;
  box-sizing: border-box;
  outline: 0;

  @media ${device.laptop}{
    width: ${props => props.full ? '100%' : 'auto' };
  }

  &:hover {
    transform: translate(0, -2px);
    box-shadow: 0 2px 20px 0 rgba(0,0,0,0.12);
  }
`;

const Button = (props) => (
  <StyledButton {...props}>
    {props.children}
  </StyledButton>
);

Button.propTypes = {
  secondary: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Button.defaultProps = {
  size: 'medium',
  secondary: false,
  disabled: false
}

export default Button;
