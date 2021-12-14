import React, { Component } from 'react'
import styled from 'styled-components'
import CartTable from "../components/CartTable";
import { connect } from 'react-redux'
import CartSidebar from '../components/CartSidebar'
import { purchaseCart } from '../actions/CartActions'
import { device } from '../utils/devices'

const Wrapper = styled.div`
  margin-top: 40px;
  min-height: calc(100vh - 40px);

  @media ${device.laptop}{
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  @media only screen and (max-width: 480px) {
    display: flex;
    flex-flow: column wrap;
  }
`;

class Cart extends Component {

  state = {
    total: 0,
    shipping: true,
    subtotal: 0
  }

  componentDidUpdate(){

  }

  render() {
    return (
      <Wrapper>
        <CartTable items={this.props.cart} handleTotal={this.handleTotal} />
        <CartSidebar
          weeklyOrder={this.props.user.weeklyOrder}
          items={this.props.cart}
          purchaseCart={this.props.purchaseCart}
          source={this.props.user.default_source}
          order={this.props.order}
        />
      </Wrapper>
    );
  }

}

export default connect((state, ownProps) => ({
  user: state.user,
  cart: state.cart,
  cards: state.cards,
  order: state.order
}), { purchaseCart })( Cart );
