import React, { useState } from 'react'
import { Card, Input, message, Form } from 'antd'
import styled from 'styled-components'
import { auth } from '../Firebase'
import Button from '../components/Button'

const Wrapper = styled.div`
  margin: 10rem auto 2rem;
  width: 90vw;
  max-width: 700px;
`;

const ForgotPassword = () => {

  const [email, setEmail] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    
    auth.sendPasswordResetEmail(email)
    .then(() => {
      message.success('Your password reset link has been emailed')
    })
    .catch(err => {
      message.error(err.message)
    })
  }

  return (
    <Wrapper>
      <Card title='Reset Password'>
        <Form onSubmit={e => handleSubmit(e)}>
          <Form.Item>
            <Input placeholder='Email' size='large' type='email' value={email} onChange={e => setEmail(e.target.value)} />
          </Form.Item>
          <Button>Reset password</Button>
        </Form>
      </Card>
    </Wrapper>
  )
}
export default ForgotPassword;
