import React from 'react'
import { Card, Tooltip, Icon } from 'antd'
import Moment from 'react-moment'
import Button from '../components/Button'

const ProducerOpenHouse = ({ date, city, user }) => (
  <Card title={<><span>Next Open House</span> <Tooltip title='Explanation about LG open houses goes here'><Icon type="info-circle" /></Tooltip></>}>
    <h5>When</h5>
    <p><Moment format='LL'>{date}</Moment></p>
    <p>10AM - 6PM</p>
    <h5>Where <Tooltip title='RSVP to receive the address'><Icon type="question" /></Tooltip></h5>
    <p>St. Paul</p>
    <br/>
    <Button size='small'>RSVP</Button>
  </Card>
);

export default ProducerOpenHouse;
