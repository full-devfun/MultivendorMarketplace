import React, { useState } from 'react'
import styled from 'styled-components'
import Input from 'antd/lib/input'
import Icon from 'antd/lib/icon'
import message from "antd/lib/message";
import { Link } from "react-router-dom";
import { withRouter } from 'react-router-dom'
import Button from '../components/Button'
import { signInWithEmail } from '../actions/UserActions'

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

const LoginForm = ({ history }) => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    signInWithEmail(email, password)
    .then(res => {
      if(res.success) {
        history.push('/')
      } else {
        message.error('Email or password is incorrect')
      }
    })
    .catch(err => message.error('Email or password is incorrect'))
  }

  return (
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
      <br/>
      <p><Link to='/forgot-password'>Forgot your password?</Link></p>
      <p>Don't have an account? <Link to='/register'>Register here</Link></p>
    </Wrapper>
  )
}

export default withRouter(LoginForm)
