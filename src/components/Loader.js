import React from 'react'
import Icon from 'antd/lib/icon'
import styled from 'styled-components'

const Spinner = styled.div`
  height: 100vh;
  background: rgba(0,0,0,0.03);
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 60px;
  justify-content: center;
`;

const Loader = () => (
  <Spinner><Icon type="loading" /></Spinner>
);

export default Loader;
