import React, { useState } from 'react'
import { Form, Card, Input, Popconfirm, Button, Switch } from 'antd'


const AddressCard = ({ title, name, street, city, state, apt, zip, unattendedDelivery, handleEdit, handleDelete, index }) => {

  const [editMode, setEditMode] = useState(false)

  const [newTitle, setNewTitle] = useState(title)
  const [newName, setNewName] = useState(name)
  const [newStreet, setNewStreet] = useState(street)
  const [newApt, setNewApt] = useState(apt)
  const [newCity, setNewCity] = useState(city)
  const [newZip, setNewZip] = useState(zip)
  const [newUnattendedDelivery, setNewUnattendedDelivery] = useState(unattendedDelivery)

  const deleteConfirm = () => {
    console.log('index', index)
    handleDelete(index)
  }

  const deleteCancel = () => {

  }

  return (
    <Card
      title={title}
      extra={
        editMode
          ?
            <Popconfirm
              title="Are you sure?"
              onConfirm={deleteConfirm}
              onCancel={deleteCancel}
              okText="Yes"
              cancelText="No"
            >
              <Button type='danger' ghost>Remove</Button>
            </Popconfirm>
          : <Button type='link' onClick={() => setEditMode(true)}>Edit</Button>
      }
    >
      {editMode
        ?
          <Form>
            <Form.Item label='Title'>
              <Input value={newTitle} onChange={e => setNewTitle(e.target.value)} />
            </Form.Item>
            <Form.Item label='Name'>
              <Input value={newName} onChange={e => setNewName(e.target.value)} />
            </Form.Item>
            <Form.Item label='Street'>
              <Input value={newStreet} onChange={e => setNewStreet(e.target.value)} />
            </Form.Item>
            <Form.Item label='Apt / Suite #'>
              <Input value={newApt} onChange={e => setNewApt(e.target.value)} />
            </Form.Item>
            <Form.Item label='City'>
              <Input value={newCity} onChange={e => setNewCity(e.target.value)} />
            </Form.Item>
            <Form.Item label='State'>
              <Input value='Minneapolis' disabled />
            </Form.Item>
            <Form.Item label='ZIP'>
              <Input value={newZip} onChange={e => setNewZip(e.target.value)} />
            </Form.Item>
            <Form.Item>
              <Switch checked={newUnattendedDelivery} onChange={checked => setNewUnattendedDelivery(checked)} />
            </Form.Item>
            <Button type='link' onClick={() => setEditMode(false)}>Cancel</Button>
            <Button
              onClick={() => {
                setEditMode(false)
                handleEdit(index, newTitle, newName, newStreet, newApt, newCity, 'Minneapolis', newZip)
              }}
              >
              Save
            </Button>
          </Form>
        :
          <div>
            <p>{name}</p>
            <p>{street} {apt && <span>#{apt}</span>}</p>
            <p>{city}, {state}</p>
            <p>{zip}</p>
          </div>
      }
    </Card>
  )
}

export default AddressCard;
