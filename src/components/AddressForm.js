import React, { useState, useEffect } from "react";
import Autocomplete from "react-google-autocomplete";
import styled from "styled-components";
import Button from "./Button";
import { Input } from "antd";
import {
  addShippingAddress,
  loginUser,
  SET_SELECTED_ADDRESS,
} from "../actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
import { db } from "../Firebase";
const Wrapper = styled.div`
  input {
    padding: 0.5rem;
    outline: 0;
    width: 100%;
  }
`;

const Error = styled.div`
  color: red;
  padding-bottom: 0.7rem;
  padding-top: 0.3rem;
  width: 100%;
  display: block;
`;

const AddressForm = ({ handleSubmit }) => {
  const deliveryCounties = [
    "Ramsey County",
    "Hennepin County",
    "Anoka County",
    "Dakota County",
  ];

  const [title, setTitle] = useState("");
  const [name, setName] = useState("");
  const [street, setStreet] = useState("");
  const [city, setCity] = useState("");
  const [apt, setApt] = useState("");
  const [zip, setZip] = useState("");
  const [loading, setLoading] = useState(false);
  // const [unattendedDelivery, setUnattendedDelivery] = useState(false)
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  const [error, setError] = useState(false);
  const [valid, setValid] = useState(false);

  const validateInputs = () => {
    if (title === "" || name === "" || street === "") {
      return false;
    } else {
      return true;
    }
  };

  const clearInputs = () => {
    setTitle("");
    setName("");
    setApt("");
  };

  // useEffect(() => {
  //   if (title && name && street && city && zip) {
  //     handleSubmit({
  //       label: title,
  //       value: { name, street, apt, city, state: "Minnesota", zip },
  //     });
  //   }
  // }, [title, name, street, city, zip]);

  const handleSubmitAddress = (title, name, street, apt, city, state, zip) => {
    const userAddress = { title, name, street, apt, city, state, zip };
    setLoading(true);
    const { uid } = user;
    dispatch({
      type: SET_SELECTED_ADDRESS,
      payload: { label: title, value: userAddress },
    });
    addShippingAddress(uid, {
      title: title,
      name: name,
      street: street,
      apt: apt,
      city: city,
      state: state,
      zip: zip,
    }).then(async () => {
      return await db
        .collection("users")
        .doc(uid)
        .get()
        .then((doc) => {
          setLoading(false);
          dispatch({ type: "login_user", payload: doc.data() });
          handleSubmit({
            label: title,
            value: { name, street, apt, city, state, zip },
          });
        });
    });
  };

  return (
    <Wrapper>
      <Input
        size="large"
        value={title}
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        placeholder="* Address Title (ie. Home)"
      />
      <br />
      <br />
      <Input
        size="large"
        value={name}
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="* Recipient Name"
      />
      <br />
      <br />
      <Autocomplete
        style={{ height: "10%", border: "1px gray", borderRadius: "3px" }}
        className="address"
        placeholder="* Enter your address"
        onPlaceSelected={(place) => {
          let county = "";
          let street = "";
          let route = "";
          let city = "";
          let zip = "";
          const { address_components } = place;
          for (let i = 0; i < address_components.length; i++) {
            switch (address_components[i].types[0]) {
              case "street_number":
                street = address_components[i].short_name;
                break;
              case "route":
                route = address_components[i].short_name;
                break;
              case "locality":
                city = address_components[i].short_name;
                break;
              case "administrative_area_level_2":
                county = address_components[i].long_name;
                break;
              case "postal_code":
                zip = address_components[i].short_name;
                break;
              default:
                break;
            }
          }

          if (deliveryCounties.indexOf(county) > -1) {
            setError(false);
            setStreet(`${street} ${route}`);
            setCity(city);
            setZip(zip);
            setValid(true);
          } else {
            setError(true);
            setValid(false);
          }
        }}
        types={["address"]}
        componentRestrictions={{ country: "us" }}
      />
      <br />
      <br />
      <Input
        size="large"
        type="text"
        value={apt}
        onChange={(e) => setApt(e.target.value)}
        placeholder="Apt / Suite #"
      />
      <br />
      <br />
      <p>
        {" "}
        *Mandatory field
        {/* <Switch
        checked={unattendedDelivery}
        onChange={checked => setUnattendedDelivery(checked)}
      /> */}
      </p>
      <p>**Unattended delivery is standard for all addresses</p>
      <br />
      {error && <Error>Sorry this address is out of our delivery area</Error>}
      {title && name && zip && street && city && zip && (
        <Button
          onClick={() => {
            const validate = validateInputs();
            if (validate) {
              handleSubmitAddress(
                title,
                name,
                street,
                apt,
                city,
                "Minneapolis",
                zip
              );
              clearInputs();
              dispatch(loginUser());
            } else {
              alert("Mandatory field is empty");
            }
          }}
          disabled={!valid}
          secondary
        >
          Add Address
        </Button>
      )}
    </Wrapper>
  );
};
export default AddressForm;

// import React from "react";
// import styled from "styled-components";
// import Input from "antd/lib/input";
// import { useSelector } from "react-redux";

// const Wrapper = styled.div`
//   margin-bottom: 2rem;
// `;

// const Form = styled.form`
//   display: grid;
//   grid-gap: 1rem;
// `;

// const AddressForm = (props) => {
//   const user = useSelector((state) => state.user);
//   return (
//     <Wrapper>
//       <h4>Delivery Address</h4>
//       <Form>
//         <Input
//           placeholder="Full Name"
//           value={props.name}
//           id="name"
//           onChange={props.handleChange}
//         />
//         <Input
//           placeholder="Street"
//           value={props.street}
//           id="street"
//           onChange={props.handleChange}
//         />
//         <Input
//           placeholder="City"
//           value={props.city}
//           id="city"
//           onChange={props.handleChange}
//         />
//         <Input placeholder="State" value="Minnesota" disabled />
//         <Input
//           placeholder="Zip"
//           value={props.zip}
//           id="zip"
//           onChange={props.handleChange}
//         />
//       </Form>
//     </Wrapper>
//   );
// };

// export default AddressForm;
