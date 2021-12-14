import React, { useState } from "react";
import Select from "react-select";
import { useDispatch, useSelector } from "react-redux";
import { SET_SELECTED_ADDRESS } from "../actions/UserActions";

import styled from "styled-components";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

export default function AddressSelect({ handleAddress }) {
  const [addressState, setAddressState] = useState({
    selected: { value: null, label: "Select" },
    options: [],
    isLoaded: false,
    addNew: false,
  });
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const opts = user.addresses
    ? user.addresses
        .map((address) => ({
          value: address,
          label: address.title,
        }))
        .concat([
          { label: "Local Pickup", value: "local pickup" },
          { label: "Add New", value: null },
        ])
    : [
        { label: "Local Pickup", value: "local pickup" },
        { label: "Add New", value: null },
      ];

  const handleChange = (selectedOption) => {
    const { value, label } = selectedOption;
    handleAddress(value);
    if (value === "addNew") {
      setAddressState({
        ...addressState,
        selected: selectedOption,
        addNew: true,
      });
    } else {
      dispatch({ type: SET_SELECTED_ADDRESS, payload: selectedOption });
    }
  };

  if (user.addresses && user.addresses.length > 0) {
    return (
      <Wrapper>
        Choose Address
        <Select
          value={user.selectedAddress}
          onChange={handleChange}
          options={opts}
        />
      </Wrapper>
    );
  } else {
    return null;
  }
}
