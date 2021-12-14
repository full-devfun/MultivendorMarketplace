import React, { useState } from "react";
import Autocomplete from "react-google-autocomplete";
import styled from "styled-components";
import Button from "../Button";
import { Input } from "antd";

const Wrapper = styled.div`
  input {
    padding: 1rem;
    outline: 0;
    width: 400px;
    margin-right: 1rem;
  }
`;

const Error = styled.div`
  color: red;
  padding: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.12);
  display: block;
  margin-top: 1rem;
  width: 400px;
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
  // const [unattendedDelivery, setUnattendedDelivery] = useState(false)

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
        className="address"
        placeholder="* Enter your address"
        onPlaceSelected={(place) => {
          console.log(place);
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
      <Button
        onClick={() => {
          const validate = validateInputs();
          if (validate) {
            handleSubmit(title, name, street, apt, city, "Minneapolis", zip);
            clearInputs();
          } else {
            alert("Mandatory field is empty");
          }
        }}
        disabled={!valid}
      >
        Add Address
      </Button>
      {error && <Error>Sorry this address is out of our delivery area</Error>}
    </Wrapper>
  );
};
export default AddressForm;
