import React, { Component } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import {
  fetchTransactions,
  fetchUserTransactions,
} from "../actions/TransactionActions";
import Button from '../components/Button'
import Moment from 'react-moment'
import getDeliveryDate from '../utils/getDeliveryDate'
import { Link } from 'react-router-dom';
import { clearCart } from "../actions/CartActions";

const Wrapper = styled.div`
  height: 100vh;
  background: ${(props) => props.theme.bg};
`;

const Confirm = styled.div`
  padding: 8rem 0;
  box-sizing: border-box;
  background: ${props => props.theme.bg};
  color: ${props => props.theme.secondary};
  text-align: center;
    min-height: calc(100vh - 272px);

  p {
    font-size: 24px;
    font-weight: normal;
  }

  span {
    text-transform: uppercase;
    padding: .5rem;
    border-radius: .5rem;
    font-size: 16px;
    letter-spacing: 1px;
    background: white;
  }

  strong {
    font-weight: 500;
  }
`;

class PurchaseConfirmation extends Component {

  state = {
    isLoaded: false
  }

  componentDidMount(){
    const { id } = this.props.match.params;
    this.props.fetchTransactions(id)
    .then(() => {
      clearCart(this.props.user.uid);
      this.setState({ isLoaded: true })
    })
    fetchUserTransactions(this.props.user.uid);
  }

  render() {
    return (
      <Wrapper>
        {this.state.isLoaded
          ?
            <Confirm>
              <p>Thank you for your order</p>
              <p>Order <span>#{this.props.match.params.id}</span></p>
              <br/>
                <p>Your order will be delivered on<br/> <strong><Moment format='dddd, LL'>{getDeliveryDate()}</Moment></strong></p>
              <br/>
              <p>You may continue to add to your order throughout the week</p>
              <br/>
              <p><Link to='/shop'><Button large>Continue Shopping</Button></Link></p>
            </Confirm>
          : null
        }

      </Wrapper>
    );
  }

}

export default connect((state, ownProps) => ({
  transactions: state.transactions,
  user: state.user,
}), { fetchTransactions })( PurchaseConfirmation );
