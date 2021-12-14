import React from 'react'
import styled from 'styled-components'
import { SearchBox } from 'react-instantsearch-dom'

const Wrapper = styled.div`
  padding: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.border};
  color: ${props => props.theme.secondary};

  .ais-SearchBox {
    width: 100%;
    display: flex;
    position: relative;

    form {
      width: 100%;
    }

    .ais-SearchBox-input {
      padding: .5rem;
      box-sizing: border-box;
      border: 0;
      font-size: 16px;
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
`;

const ShopFilter = () => (
  <Wrapper>
    <SearchBox />
  </Wrapper>
);

export default ShopFilter;
