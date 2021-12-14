import React, { Component } from "react";
import { injectStripe, CardElement } from "react-stripe-elements";
import Button from "./Button";
import CardSection from "./CardSection";
import { db } from "../Firebase";
import { connect } from "react-redux";
import styled from "styled-components";
import message from "antd/lib/message";
import Spin from "antd/lib/spin";
import { addCard, fetchCards } from "../actions/CardActions";

const Form = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Input = styled.input`
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 5px;
  border: 0;
  font-family: Aktiv Grotesk;
  color: rgb(54, 33, 62);
  background: rgba(0, 0, 0, 0.04);
  width: 100%;
  box-sizing: border-box;
  outline: 0;

  &::placehodler {
    color: rgb(54, 33, 62);
  }
`;

class CheckoutForm extends Component {
  state = {
    newCardName: "",
    cardLoad: false,
  };

  handleChangeName = (e) => {
    const name = e.target.value;

    this.setState({ newCardName: name });
  };

  handleCardAdd = async (e) => {
    e.preventDefault();
    const card = this.props.elements.getElement("card");
    this.setState({ ...this.state, cardLoad: true });
    try {
      const token = await this.props.stripe.createPaymentMethod({
        type: "card",
        name: this.props.user.name,
        card: card,
      });

      await addCard(
        this.props.user,
        token,
        this.state.newCardName,
        this.props.stripe,
        message,
        this.props.handleSubmit
      );

      this.props.fetchCards(
        this.props.user.uid,
        {
          label: this.state.newCardName,
          value: token.paymentMethod,
        },
        this.props.user.default_source
      );
      this.setState({ ...this.state, cardLoad: false });
    } catch (err) {
      console.log("TOKEN CREATE ERR", err);
      this.setState({ ...this.state, cardLoad: false });
      message.error(err);
    }
  };

  render() {
    const { type, buttonText, elements } = this.props;

    return (
      <Form onSubmit={this.handleCardAdd}>
        <Input
          value={this.state.newCardName}
          onChange={this.handleChangeName}
          placeholder="Card Name (ie. Personal, Business, etc)"
        />
        <CardSection />
        <Spin spinning={this.state.cardLoad}>
          <Button secondary={type === "secondary" ? true : false}>
            {buttonText}
          </Button>
        </Spin>
      </Form>
    );
  }
}

export default injectStripe(
  connect(
    (state, ownProps) => ({
      user: state.user,
    }),
    { fetchCards }
  )(CheckoutForm)
);
