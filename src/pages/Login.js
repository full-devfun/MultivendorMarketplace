import React from 'react'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import LoginForm from '../components/LoginForm'
import { uiConfig, auth} from '../Firebase'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: calc(119px + 4rem) auto 4rem;
  width: 90vw;

  p {
    text-align: center;
  }
`;

const Login = () => {

  return (
    <Wrapper>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth}/>
      <LoginForm />
    </Wrapper>
  )
}

export default Login;
