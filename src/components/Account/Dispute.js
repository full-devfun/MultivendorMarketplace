import React, { useState } from 'react'
import { Input, Button, Select, Modal, message } from 'antd'
import DisputeItemSelect from './DisputeItemSelect'

const { Option } = Select;
const { TextArea } = Input;

const disputeOptions = [
  { value: 'default', text: 'Choose a type', disabled: true  },
  { value: 'delivery', text: 'There was a problem with my delivery', disabled: false  },
  { value: 'items', text: 'There was a problem with one or more items', disabled: false  },
  { value: 'payment', text: 'There was a problem with payment', disabled: false  },
]

const Dispute = ({ open, order, close }) => {
  const [disputeType, setDisputeType] = useState('default')

  const handleSubmitComplaint = () => {
    message.info('Your complaint was submitted.')
    close()
  }

  if(order.data()){
    console.log(Object.values(order.data().items))
  }

  return (
    <Modal
      visible={open}
      title={order && order.id && `File a complaint #${order.id.toUpperCase()}`}
      onCancel={close}
      footer={[]}
      className='item-modal'>
        <Select style={{ width: 400 }} size='large' defaultValue='default' onChange={value => setDisputeType(value)}>
          {disputeOptions.map(option => {
            const { value, disabled, text } = option
            return (
              <Option
                disabled={disabled}
                value={value}
                key={value}
              >
                {text}
              </Option>
            )
          })}
        </Select>
        <br/><br/>
        {disputeType === 'items' &&
          <DisputeItemSelect options={Object.values(order.data().items)} />
        }
        <TextArea placeholder='Let us know about any issues you had with this order' />
        <br/><br/>
        <Button onClick={() => handleSubmitComplaint()}>Submit</Button>
    </Modal>
  )
}

export default Dispute;
