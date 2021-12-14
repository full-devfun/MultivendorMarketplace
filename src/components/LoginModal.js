import React, { useState } from 'react'
import styled from 'styled-components'
import { Input, Icon, message } from 'antd'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router-dom'
import Button from '../components/Button'
import { uiConfig, auth} from '../Firebase'
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
import { signInWithEmail } from '../actions/UserActions'
import { Modal } from 'antd'

const Wrapper = styled.div`
  width: 90vw;
  max-width: 400px;
  margin: 2rem auto;
  border-top: 1px solid rgba(0,0,0,0.12);
  padding-top: 2rem;

  p {
    text-align: center;
    opacity: 0.7;
  }
`;

const Form = styled.form`
  display: grid;
  grid-template-rows: repeat(3, 1fr);
  grid-gap: 1rem;
`;

const LoginForm = ({ history, visible, handleModal }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    signInWithEmail(email, password)
    .then(res => {
      if(res.success) {
        handleModal(false)
      } else {
        message.error('Email or password is incorrect')
      }
    })
    .catch(err => message.error('Email or password is incorrect'))
  }

  // Change redirect
  const modalConfig = {
    ...uiConfig,
    signInSuccessUrl: null,
    callbacks: {
      signInSuccess: () => {
        handleModal(false)
        return false
      }
    }
  }

  return (
    <Modal
      title="Login"
      visible={visible}
      onOk={() => console.log('okay!')}
      onCancel={() => handleModal(false)}
      footer={[]}
    >
    <StyledFirebaseAuth uiConfig={modalConfig} firebaseAuth={auth}/>
    <Wrapper>
      <p>Login with Email</p>
      <Form onSubmit={handleSubmit}>
        <Input
          prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Email'
          onChange={e => setEmail(e.target.value)}
          type='email'
        />
        <Input
          prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
          placeholder='Password'
          onChange={e => setPassword(e.target.value)}
          type='password'
        />
        <Button>Login</Button>
      </Form>
      <br />
      <p>Don't have an account? <Link to='/register'>Register here</Link></p>
    </Wrapper>
  </Modal>
  )
}

export default withRouter(LoginForm)
