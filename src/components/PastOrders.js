import React, { useState } from 'react'
import styled from 'styled-components'
import { Badge, Modal, List, Divider, Icon, Menu, Dropdown, Button as ButtonLink } from 'antd'
import Moment from 'react-moment'
import Button from './Button'
import { useSelector } from 'react-redux'
import useTransactions from '../hooks/useTransactions'
import Dispute from './Account/Dispute'

const Wrapper = styled.div`
  .react-select-lg {
    width: 100%;
  }
`;

const Head = styled.div`
  display: grid;
  grid-gap: 1rem;
  padding: 1rem 0;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid rgba(0,0,0,0.12);
`;

const CustomModal = styled.div`

`;


const Order = styled.div`
  padding: 0.5rem 0;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(6, 1fr);
  border-bottom: 1px solid rgba(0,0,0,0.12);
  align-items: center;

  span:last-of-type {
    text-align: right;
  }

  span:first-of-type {
    text-transform: uppercase;
  }

  &:last-of-type {
    border: 0;
  }
`;

const Item = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;

  img {
    width: 100px;
    height: 100px;
    object-fit: cover;
    border-radius: 5px;
  }
`;

const PastOrders = ({ orders }) => {

  const user = useSelector(state => state.user)
  const { loading, transactions } = useTransactions(user.uid)

  const [modalOpen, setModalOpen] = useState(false)
  const [disputeOpen, setDisputeOpen] = useState(false)
  const [activeOrder, setActiveOrder] = useState('')

  const handleClick = (order) => {
    setModalOpen(true)
    setActiveOrder(transactions.find(o => o.id === order))
  }

  // const handleOpenComplaint = (id) => {
  //   setActiveOrder(transactions.find(o => o.id === id))
  //   setDisputeOpen(true)
  // }

  const menu = (id) => (
    <Menu>
      {/* <Menu.Item key={0}>
        <ButtonLink onClick={() => handleOpenComplaint(id)} type='link'>File a Complaint</ButtonLink>
      </Menu.Item> */}
      <Menu.Item key={1}>
        <ButtonLink type='link'>Print</ButtonLink>
      </Menu.Item>
    </Menu>
  )

  return (
    <Wrapper>
      <Head>
        <span>Order</span>
        <span>Date</span>
        <span>Total</span>
        <span>Status</span>
      </Head>
      {!loading && transactions.map(order => {
        const { id } = order;
        const { created_at, total, status } = order.data();
        return (
          <Order key={id}>
            <span>#{id}</span>
            <span><Moment format="LL" unix>{created_at/1000}</Moment></span>
            <span>${total.toFixed(2)}</span>
            {status === 'delivered' ? 
            <Badge status="success" text="Delivered" /> : (
              status === 'cancelled' ? 
              <Badge status="error" text="Cancelled" /> :
              <Badge status="processing" text="Processing" />
            )}
            <span>
              <Button size='small' secondary onClick={() => handleClick(id)}>View</Button>
            </span>
            <span className='alignright'>
            <Dropdown overlay={menu(id)} trigger={['click']}>
              <Icon type="more" />
            </Dropdown>
            </span>
          </Order>
        )
      })}
      <CustomModal>
      <Modal
        visible={modalOpen}
        title={activeOrder.id && `Transaction #${activeOrder.id.toUpperCase()}`}
        onCancel={() => setModalOpen(false)}
        footer={[]}
        className='item-modal'
      >
        {activeOrder !== '' &&
          <List
            header='Products'
            bordered
            dataSource={Object.keys(activeOrder.data().items)}
            renderItem={item => {

              const { image, title, price, count, producerName } = activeOrder.data().items[item]

              return (
                <List.Item key={item}>
                  <Item>
                    <p><img src={image} alt={title} /></p>
                    <p>{title}<br></br>{producerName}</p>
                    <p>{(price * count).toFixed(2)}</p>
                  </Item>
                  <Divider />
                  <h3>Total: ${activeOrder.data().total.toFixed(2)}</h3>
                </List.Item>
              )
            }}
          />
        }
      </Modal>
      </CustomModal>
      <div>
        {activeOrder !== '' &&
        <Dispute
          open={disputeOpen}
          order={activeOrder}
          close={() => setDisputeOpen(false)}
        />
        }
      </div>
    </Wrapper>
  )
}

export default PastOrders;
