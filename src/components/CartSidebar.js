import React, { Component } from "react";
import styled from "styled-components";

import Button from "./Button";
import { Link } from "react-router-dom";
import { withRouter } from "react-router";
import calcTotal from "../utils/calcTotal";
import getDeliveryDate from "../utils/getDeliveryDate";
import Moment from "react-moment";
import { connect } from "react-redux";
import CardSelect from "./CardSelect";
import AddressSelect from "./AddressSelect";
import AddressForm from "./AddressForm";
import { injectStripe } from "react-stripe-elements";
import { fetchCart, clearCart, checkStock } from "../actions/CartActions";
import { fetchCards } from "../actions/CardActions";
import { loginUser } from "../actions/UserActions";
import { updateOrder } from "../actions/OrderActions";
import { device } from "../utils/devices";
import Axios from "axios";
import Spin from "antd/lib/spin";
import PaymentErrorModal from "./PaymentErrorModal";

const Sidebar = styled.div`
  position: sticky;
  top: 40px;
  background: ${(props) => props.theme.bg};
  box-sizing: border-box;
  padding-left: 2rem;
  display: flex;
  overflow: scroll;
  flex-direction: column;
  font-family: ${(props) => props.theme.sans};

  @media only screen and (max-width: 480px) {
    position: static;
    width: 100vw;
    padding: 24px 24px 24px 24px;
  }

  @media ${device.laptop} {
    overflow: scroll;
    padding: 4rem 1rem 1rem 1rem;
    height: calc(100vh - 43px);
  }

  h2 {
    font-weight: 200;
    font-size: 24px;
  }

  button {
    width: 100%;
  }

  ul {
    list-style: none;
    line-height: 2.5em;
    padding: 0;

    li {
      display: flex;
      justify-content: space-between;
    }
  }
`;

const Center = styled.p`
  text-align: center;
`;

const Note = styled.div`
  font-size: 14px;
  margin: 1rem 0 2rem;
  background: white;
  padding: 1rem;
  text-align: center;
  border-radius: 5px;
  line-height: 2em;
`;

class CartSidebar extends Component {
  state = {
    address: {},
    name: "",
    street: "",
    city: "",
    zip: "",
    card: this.props.user.default_source,
    paymentLoading: false,
    paymentError: { isError: false, message: "" },
  };
  calcSubtotal = (items) => {
    let total = 0;
    for (let [value] of Object.entries(items)) {
      const { price, count } = items[value];
      total = total + price * count;
    }
    return Math.round(total * 100) / 100;
  };

  handleAddress = (address) => {
    this.setState({
      ...this.state,
      address: address,
    });
  };

  handlePaymentError = (error, message) => {
    this.setState({ ...this.state, paymentError: error, message: message });
  };

  handleCheckout = async (user, cart, total, token) => {
    let currentTotal = 0;
    const stock = await this.props.checkStock(cart);
    this.setState({ paymentLoading: true });
    if (
      Object.keys(this.state.address).length === 0 &&
      this.state.address !== "local pickup" &&
      this.state.address.constructor === Object
    ) {
      let address = {
        name: this.state.name,
        street: this.state.street,
        city: this.state.city,
        state: "Minnesota",
        zip: this.state.zip,
      };

      this.handleAddress(address);
    }

    if (this.props.user.weeklyOrder) {
      currentTotal = this.props.weeklyOrder.total;
    }
    if (stock) {
      Axios.post("/createCharge", {
        paymentMethod: token,
        customer: this.props.user.customer_id,
        total,
        email: this.props.user.email,
      })
        .then(async (res) => {
          const payment = await this.props.stripe.confirmCardPayment(
            res.data.charge.client_secret
          );
          if (payment.paymentIntent.status === "succeeded") {
            const transactionId = await this.props.purchaseCart(
              user,
              cart,
              token,
              total,
              currentTotal,
              this.state.address,
              payment.paymentIntent.id,
              res.data.charge.transfer_group
            );
            this.setState({ paymentLoading: false });
            this.props.history.push(`/purchase-confirmation/${transactionId}`);
          } else {
            console.log("PAYMENT FAILED", payment);
          }
        })
        .catch((err) => {
          this.setState({
            paymentError: {
              isError: true,
              message: err.response.data.error.raw.message || "payment failed",
            },
            paymentLoading: false,
          });
        });
    }
  };

  handleChange = (e) => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    });
  };

  newCard = (card) => {
    this.setState({
      ...this.state,
      card: card,
    });
  };

  setSelectedCard = (selected) => {
    if (selected.value.details) {
      this.setState({ ...this.state, card: selected.value.details.id });
    } else {
      this.setState({ ...this.state, card: selected.value.id });
    }
  };

  componentDidMount() {
    if (this.props.user.default_source) {
      this.props.fetchCards(
        this.props.user.uid,
        { value: {} },
        this.props.user.default_source
      );
      this.setSelectedCard(this.props.cards.selected);
    }
  }

  render() {
    let shipping = 9.99;
    const { items, user, source } = this.props;

    if (this.calcSubtotal(this.props.items) > 40) {
      shipping = 0;
    }

    return (
      <Sidebar>
        <h2>Cart Summary</h2>
        <ul>
          <li>
            <span>Subtotal</span>
            <span>${this.calcSubtotal(this.props.items).toFixed(2)}</span>
          </li>
          <li>
            <span>Shipping</span>
            <span>{shipping > 0 ? `$${shipping}` : "FREE"}</span>
          </li>
          <li>
            <span>
              <strong>Total</strong>
            </span>
            <span>
              <strong>${calcTotal(shipping, items)}</strong>
            </span>
          </li>
        </ul>
        <br />
        {shipping > 0 && (
          <p>
            Add ${40 - this.calcSubtotal(this.props.items)} for free shipping
          </p>
        )}
        <Note>
          Your order will be delivered <br />{" "}
          <strong>
            <Moment format="dddd, LL">{getDeliveryDate()}</Moment>
          </strong>
        </Note>
        {this.props.user.uid && (
          <>
            {(this.props.user.addresses &&
              this.props.user.addresses.length === 0) ||
            !this.props.user.addresses ||
            this.state.address === null ? (
              <>
                <AddressForm
                  user={this.props.user.uid}
                  name={this.state.name}
                  street={this.state.street}
                  city={this.state.city}
                  zip={this.state.zip}
                  handleChange={this.handleChange}
                  handleSubmit={this.handleAddress}
                />
                {/* <Center>or</Center>
                <Link to="/account">
                  <Button secondary>Save Address to your account</Button>
                </Link> */}
                <br />
              </>
            ) : (
              <AddressSelect handleAddress={this.handleAddress} />
            )}
            <CardSelect handleSubmit={this.newCard} />
            {this.props.user.selectedAddress.value &&
            this.props.cards.selected.value !== "addNew" ? (
              this.props.items.length > 0 ? (
                <Spin spinning={this.state.paymentLoading}>
                  <Button
                    onClick={() => {
                      this.handleCheckout(
                        user,
                        items,
                        this.calcSubtotal(items),
                        this.props.cards.selected.value.details
                          ? this.props.cards.selected.value.details.id
                          : this.props.cards.selected.value.id
                      );
                    }}
                    // secondary={type === "secondary" ? true : false}
                  >
                    Confirm Purchase
                  </Button>
                  <PaymentErrorModal
                    error={this.state.paymentError}
                    setClearError={this.handlePaymentError}
                  />
                </Spin>
              ) : (
                <div style={{ color: "red" }}>
                  Cart is empty, please add items before checking out.
                </div>
              )
            ) : (
              <Link to="/account">
                <Button>Finish Setting up your Account</Button>
              </Link>
            )}
          </>
        )}
        <br />
        <Link to="/shop">
          <Button secondary>Continue Shopping</Button>
        </Link>
      </Sidebar>
    );
  }
}

export default injectStripe(
  withRouter(
    connect(
      (state, ownProps) => ({
        transactions: state.transactions,
        sources: state.sources,
        user: state.user,
        cards: state.cards,
      }),
      { fetchCart, loginUser, updateOrder, checkStock, fetchCards }
    )(CartSidebar)
  )
);
