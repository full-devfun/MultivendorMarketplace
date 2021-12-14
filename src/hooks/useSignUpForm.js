import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { useDispatch } from "react-redux";
import { message, Button } from "antd";
import { useHistory } from "react-router-dom";

const useSignUpForm = () => {
  const [inputs, setInputs] = useState({});
  const dispatch = useDispatch();
  let history = useHistory();

  const handleSubmit = async (e) => {
    if (e) {
      e.preventDefault();
    }

    const { firstName, lastName, email, password } = inputs;
    console.log("INPUTS", inputs);

    try {
      const userAuth = await auth.createUserWithEmailAndPassword(
        email,
        password
      );

      const { user } = userAuth;
      const uid = user.uid;

      const newUser = await db
        .collection("users")
        .doc(uid)
        .set({
          displayName: `${firstName} ${lastName}`,
          provider: "email",
          firstName: firstName,
          lastName: lastName,
          email: email,
          following: [],
          email_options: {
            marketing: true,
          },
          uid: uid,
          // },
          // { merge: true }
        });

      const newUserData = await db.collection("users").doc(uid).get();
      dispatch({
        type: "LOGIN_USER",
        payload: newUserData.data(),
      });
      history.push("/");
    } catch (err) {
      console.log(err);
      message.error(
        <>
          {err.message} &nbsp;&nbsp;
          <Button onClick={() => history.push("/login")} size="small">
            Login
          </Button>
        </>
      );
    }
  };

  const handleInputChange = (e) => {
    e.persist();
    setInputs((inputs) => ({ ...inputs, [e.target.id]: e.target.value }));
  };

  return {
    handleSubmit,
    handleInputChange,
    inputs,
  };
};

export default useSignUpForm;
