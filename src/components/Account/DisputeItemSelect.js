import React, { useState } from 'react'
import { Select } from 'antd';

const { Option } = Select

const DisputeItemSelect = ({ options }) => {

  console.log(options)

  const [selectedItems, setItems] = useState([])

  const handleChange = (selected) => {
    setItems(selected)
  }

  const filteredOptions = options.filter(o => !selectedItems.includes(o));

  return (
    <>
    <Select
      mode="multiple"
      placeholder="Choose items"
      value={selectedItems}
      onChange={handleChange}
      style={{ width: '100%' }}
    >
      {filteredOptions.map(item => (
        <Option key={item.uid} value={item.title}>
          {item.title}
        </Option>
      ))}
    </Select>
    <br/><br/>
    </>
  );
}

export default DisputeItemSelect
