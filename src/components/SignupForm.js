import React from "react";
import useSignUpForm from "../hooks/useSignUpForm";
import styled from "styled-components";
import Button from "./Button";
import Input from "antd/lib/input";
import { Link } from "react-router-dom";

const { Password } = Input;

const Wrapper = styled.div``;

const Form = styled.form`
  display: grid;
  grid-gap: 1rem;
`;

const SignupForm = () => {
  const { inputs, handleInputChange, handleSubmit } = useSignUpForm();

  const fields = [
    { id: "firstName", placeholder: "First name" },
    { id: "lastName", placeholder: "Last name" },
    { id: "email", placeholder: "Email address", type: "email" },
    { id: "password", placeholder: "Password", type: "password" },
  ];

  let disabled = true;

  if (Object.keys(inputs).length === 4) {
    disabled = false;
  }

  return (
    <Wrapper>
      <h2>Signup with Email</h2>
      <Form onSubmit={(e) => handleSubmit(e)}>
        {fields.map((field) => {
          const { id, type, placeholder } = field;
          if (type === "password") {
            return (
              <Password
                id={id}
                key={id}
                size="large"
                type={type || "text"}
                value={inputs[`${id}`]}
                onChange={handleInputChange}
                placeholder={placeholder}
              />
            );
          } else {
            return (
              <Input
                id={id}
                key={id}
                size="large"
                type={type || "text"}
                value={inputs[`${id}`]}
                onChange={handleInputChange}
                placeholder={placeholder}
              />
            );
          }
        })}
        <small>
          By clicking below to Sign Up you are agreeing to our{" "}
          <Link to="/terms">terms of service</Link>
        </small>
        <Button disabled={disabled}>Sign Up</Button>
      </Form>
    </Wrapper>
  );
};

export default SignupForm;
