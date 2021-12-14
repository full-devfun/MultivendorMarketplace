import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { InstagramFilled, FacebookFilled } from '@ant-design/icons';

const Wrapper = styled.footer`
  border-top: 1px solid ${props => props.theme.border};
  padding: 2rem 5vw;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background: white;
  width: 100%;
  z-index: 2;

  svg {
    margin: 0 1rem 0 1rem;
  }

  a {
    color: black;
  }

  ul {
    list-style: none;
    display: flex;

    li {
      margin-right: 1rem;

      a {
        color: ${props => props.theme.secondary};
      }

      &:last-of-type {
        margin: 0;
      }
    }
  }
`;

const Footer = (props) => (
  <Wrapper className='footer'>
    <div>2019 &copy; Local Guru</div>
    <div className='icons'>
      <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Local-Guru-Co-100643608459837/"><FacebookFilled /></a>
      <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/localguruco/"><InstagramFilled /></a>
    </div>
    <ul>
    <li><Link to='/faq'>FAQ</Link></li>
      <li><Link to='/privacy-policy'>Privacy Policy</Link></li>
      <li><Link to='/terms'>Terms of Service</Link></li>
    </ul>
  </Wrapper>
);

export default Footer;
