import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { uiConfig, auth } from "../Firebase";
import styled from "styled-components";
import { Steps, Icon } from "antd";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CartStripe from "../components/CartStripe";
import Button from "../components/Button";
import SignupForm from "../components/SignupForm";

const Step = Steps.Step;

const Wrapper = styled.div`
  margin: calc(119px + 4rem) auto 4rem;
  max-width: 800px;
`;

const Content = styled.div`
  margin-top: 4rem;
`;

const Or = styled.div`
  text-align: center;
  margin: 2rem 0;
  text-transform: uppercase;
  display: flex;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    width: 20vw;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.12);
    margin-right: 2rem;
  }

  &:after {
    content: "";
    width: 20vw;
    height: 1px;
    display: block;
    background: rgba(0, 0, 0, 0.12);
    margin-left: 2rem;
  }
`;

const Register = () => {
  const [step, setStep] = useState(0);
  let history = useHistory();

  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards.cards);

  const next = () => {
    if (step === 2) {
      history.push("/");
    } else {
      setStep(step + 1);
    }
  };

  useEffect(() => {
    if (user.uid && step === 0) {
      setStep(1);
    }
  }, [step, user.uid]);

  useEffect(() => {
    if (Object.keys(cards).length > 0) {
      next();
    }
  }, [cards]);

  const steps = [
    {
      title: "Create Account",
      content: (
        <>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <Or>Or</Or>
          <SignupForm />
        </>
      ),
      icon: <Icon type="user" />,
    },
    {
      title: "Payment",
      content: (
        <CartStripe
          handleSubmit={() => {
            next();
          }}
          buttonText="Add Card"
        />
      ),
      icon: <Icon type="credit-card" />,
    },
    {
      title: "Info",
      content: (
        <div>
          <p>We'll put the survey here</p>
          <Button
            onClick={() => {
              next();
            }}
          >
            Confirm
          </Button>
        </div>
      ),
      icon: <Icon type="info-circle" />,
    },
  ];

  return (
    <Wrapper>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "25%",
          justifyContent: "space-evenly",
          margin: "0 auto",
        }}
      >
        <h4 style={{ padding: "0", margin: "0", fontSize: "1.2rem" }}>
          Create Acccount
        </h4>

        <Icon type="user" style={{ color: "blue", fontSize: "1.65rem" }} />
      </div>
      <Content>
        <>
          <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
          <Or>Or</Or>
          <SignupForm />
        </>
      </Content>
      {/* <Steps current={step}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>

      <Content>{steps[step].content}</Content> */}
    </Wrapper>
  );
};

export default Register;
