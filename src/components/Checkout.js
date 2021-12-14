import React from 'react'
import {Elements} from 'react-stripe-elements'
import CheckoutForm from './CheckoutForm'

const Checkout = ({ type, buttonText, handleSubmit }) => (
  <Elements>
    <CheckoutForm
      handleSubmit={handleSubmit}
      type={type}
      buttonText={buttonText}
    />
  </Elements>
);

export default Checkout;
