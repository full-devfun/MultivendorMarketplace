import React, { useState } from "react";
import { auth, db } from "../../Firebase.js";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { Card, Input, message, Switch } from "antd";
import Button from "../Button";

const Form = styled.div`
  max-width: 400px;
  display: grid;
  grid-gap: 1rem;
`;

const ButtonGroup = styled.div`
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
`;

const ChangeEmail = () => {
  const [edit, toggleEdit] = useState(false);
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.user);
  const [optin, setOptin] = useState(user.email_options.marketing);
  const dispatch = useDispatch();
  const { email, uid } = user;

  const handleOptin = () => {
    setOptin(!optin);
    return db
      .collection("users")
      .doc(uid)
      .update({
        email_options: {
          marketing: !optin,
        },
      })
      .then(() => {
        message.success("Email settings updated");
      });
  };

  const handleSubmit = () => {
    const user = auth.currentUser;

    return user
      .updateEmail(email)
      .then(() => {
        console.log(uid);
        return db.collection("users").doc(uid).update({
          email: newEmail,
        });
      })
      .then((res) => {
        dispatch({
          type: "login_user",
          payload: { loggedIn: true, payload: res },
        });
      })
      .catch((err) => {
        switch (err.code) {
          case "auth/requires-recent-login":
            auth.currentUser.reauthenticateWithPopup().then(() => {
              return user.updateEmail(email);
            });
            break;
          default:
            message.error("This email is already in use");
        }
      });
  };

  return (
    <Card title="Email">
      {edit ? (
        <Form>
          <Input
            value={newEmail}
            placeholder="Enter new email"
            type="email"
            onChange={(e) => setNewEmail(e.target.value)}
          />
          <Input
            value={password}
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ButtonGroup>
            <Button secondary onClick={() => toggleEdit(false)} size="small">
              Cancel
            </Button>
            <Button onClick={() => handleSubmit()} size="small">
              Change Email
            </Button>
          </ButtonGroup>
        </Form>
      ) : (
        <>
          <p>{email}</p>
          <br />
          <Button onClick={() => toggleEdit(true)} size="small">
            Change Email
          </Button>
          <br />
          <br />
          <div>
            <Switch checked={optin} onChange={() => handleOptin()} /> &nbsp;
            Receive emails about offers, new products and features
          </div>
        </>
      )}
    </Card>
  );
};

export default ChangeEmail;
