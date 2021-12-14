import React, { useState } from 'react'
import { Card, Input, Form, message } from 'antd'
import Button from '../Button'
import { auth } from '../../Firebase'

const { Item } = Form;

const Password = () => {

  const [form, setForm] = useState({ oldPass: '', newPass: '', newPassConfirm: '' })
  const [formErr, setFormErr] = useState({ oldPass: false, newPass: false, newPassConfirm: false })

  const handleChange = (id, value) => {
    setForm(values => ({ ...values, [id]: value }))
    setFormErr(values => ({ ...values, newPass: false, newPassConfirm: false }))
  }

  const handleSubmit = e => {
    e.preventDefault()
    const { oldPass, newPass, newPassConfirm } = form;

    if(newPass !== newPassConfirm){
      message.error('Passwords do not match')
      setFormErr(values => ({ ...values, newPass: true, newPassConfirm: true }))
    } else {
      const user = auth.currentUser
      auth.signInWithEmailAndPassword(user.email, oldPass)
      .then(() => {
        user.updatePassword(newPass)
      })
      .then(() => {
        setForm({ oldPass: '', newPass: '', newPassConfirm: '' })
        message.success('Password changed')
      })
      .catch(err => console.log(err))
    }
  }

  const inputs = [
    { id: 'oldPass', placeholder: 'Current password' },
    { id: 'newPass', placeholder: 'New password' },
    { id: 'newPassConfirm', placeholder: 'Confirm new password' }
  ]

  return (
    <Card title='Password'>
      <Form onSubmit={handleSubmit}>
      {inputs.map(({ id, placeholder }) => (
        <Item key={id} validateStatus={formErr[id] ? 'error' : null}>
          <Input.Password
            type='password'
            placeholder={placeholder}
            name={id}
            autoComplete='password'
            value={form[id]}
            onChange={e => handleChange(e.target.name, e.target.value)}
          />
        </Item>
      ))}
      <Button
        size='small'>
          Change Password
        </Button>
      </Form>
    </Card>
  )
}

export default Password;
