import React from 'react';
import styled from 'styled-components';
import { device } from '../utils/devices';
import { SearchBox, RefinementList } from 'react-instantsearch-dom'

const Wrapper = styled.div`
  padding: 2rem 1rem;
  background: ${props => props.theme.border};
  color: ${props => props.theme.secondary};
  font-family: ${props => props.theme.sans};
  box-sizing: border-box;

  .ais-RefinementList-labelText {
    text-transform: capitalize;
    padding-left: 0.5rem;
  }

  .ais-RefinementList-count {
    display: none;
  }

  .ais-SearchBox {
    display: flex;
    position: relative;

    form {
      width: 100%;
    }

    .ais-SearchBox-input {
      padding: .5rem;
      box-sizing: border-box;
      border: 0;
      width: 100%;
      outline: 0;
      border-radius: 4px;
    }

    .ais-SearchBox-reset {
      position: absolute;
      right: 30px;
      height: 100%;
      appearance: none;
      border: 0;
      width: auto !important;
      padding: .5rem;
      box-sizing: border-box;
      background: transparent;
    }

    .ais-SearchBox-submit {
      position: absolute;
      right: 0;
      height: 100%;
      appearance: none;
      border: 0;
      width: auto !important;
      padding: .5rem;
      box-sizing: border-box;
      background: transparent;
    }
  }

  @media ${device.laptop}{
    top: 120px;
    position: sticky;
  }

  h4 {
    font-family: ${props => props.theme.body};
    font-style: italic;
    font-size: 18px;
  }

  ul {
    padding: 0;
    list-style: none;
    line-height: 1.5em;

    a {
      text-decoration: none;
      color: ${props => props.theme.secondary};

      &.active {
        opacity: .5;
      }
    }
  }
`;

const ShopSidebar = ({ hidden, product }) => (
  <Wrapper>
    <h4>Search</h4>
    <SearchBox />
    {!hidden && 
      <>
        <br/>
        <h4>Produce</h4>
        <RefinementList attribute='category' />
        <h4>Tags</h4>
        <RefinementList
          attribute='tags' />
      </>
    }
    
  </Wrapper>
);

export default ShopSidebar;
