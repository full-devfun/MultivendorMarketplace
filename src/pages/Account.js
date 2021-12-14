import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { db } from "../Firebase";
import { addShippingAddress } from "../actions/UserActions";
import Cards from "../components/Account/Cards";
import { Divider } from "antd";
import ChangeEmail from "../components/Account/ChangeEmail";
import Footer from "../components/Footer";
import AddressCard from "../components/Account/AddressCard";
import AddressForm from "../components/Account/AddressForm";
import Password from "../components/Account/Password";

const Addresses = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem;
  align-items: start;
`;

const Wrapper = styled.div`
  width: 90vw;
  margin: 160px auto 2rem;
  min-height: calc(100vh - 112px);
  color: ${(props) => props.theme.secondary};

  h1 {
    font-family: ${(props) => props.theme.body};
    font-weight: normal;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }

  h2 {
    font-family: ${(props) => props.theme.body};
    font-weight: normal;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid ${(props) => props.theme.border};
  }
`;

const Section = styled.section`
  border-bottom: 1px solid ${(props) => props.theme.border};
  padding-bottom: 2rem;
  margin-bottom: 2rem;
  display: ${(props) => (props.columns ? `grid` : `block`)};
  grid-template-columns: ${(props) =>
    props.columns ? `repeat(${props.columns}, 1fr)` : `auto`};
  grid-gap: 2rem;
`;

const Account = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  const handleDeleteAddress = async (index) => {
    const { uid, addresses } = user;

    let newAddressArray;

    if (addresses.length > 1) {
      newAddressArray = addresses;
      newAddressArray.splice(index, 1);
    } else {
      newAddressArray = [];
    }

    return await db
      .collection("users")
      .doc(uid)
      .update({
        addresses: newAddressArray,
      })
      .then(async () => {
        return await db.collection("users").doc(uid).get();
      })
      .then((doc) => {
        dispatch({ type: "login_user", payload: doc.data() });
      });
  };

  const handleEditAddress = (
    index,
    title,
    name,
    street,
    apt,
    city,
    state,
    zip
  ) => {
    const { uid, addresses } = user;
    let newAddressArray = [...addresses];

    newAddressArray[index] = {
      title: title,
      name: name,
      street: street,
      apt: apt,
      city: city,
      state: state,
      zip: zip,
    };

    return db
      .collection("users")
      .doc(uid)
      .set(
        {
          addresses: newAddressArray,
        },
        { merge: true }
      )
      .then(() => {
        return db
          .collection("users")
          .doc(uid)
          .get()
          .then((doc) => {
            dispatch({ type: "login_user", payload: doc.data() });
          });
      });
  };

  const handleSubmitAddress = (title, name, street, apt, city, state, zip) => {
    setLoading(true);
    const { uid } = user;
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
        });
    });
  };

  // const handleRemoveItem = (item) => {
  //   console.log(item)
  //   removeItem(user.uid, item)
  //   .then(() => {
  //     fetchOrder(user.uid)
  //   })
  // }

  return (
    <>
      <Wrapper>
        <h1>Settings</h1>
        {user.provider === "email" && (
          <>
            <h2>Account</h2>
            <Section columns={2}>
              <ChangeEmail />
              <Password />
            </Section>
          </>
        )}
        {/* <Section>
          <h2>Upcoming Order</h2>
          {user.uid &&
            <UpcomingOrder
              removeItem={handleRemoveItem}
            />
          }
        </Section>
        <Section>
          <h2>Past Orders</h2>
          {user.uid &&
            <PastOrders />
          }
        </Section> */}
        <Section>
          <h2>Payment</h2>
          {user.uid && <Cards />}
        </Section>
        <Section>
          <h2>Shipping</h2>
          <p>Add Address</p>
          <AddressForm handleSubmit={handleSubmitAddress} loading={loading} />
          <Divider />
          <Addresses>
            {user.addresses &&
              user.addresses.map((address, index) => (
                <AddressCard
                  key={index}
                  title={address.title}
                  name={address.name}
                  street={address.street}
                  apt={address.apt}
                  state={address.state}
                  city={address.city}
                  zip={address.zip}
                  unattendedDelivery={address.unattendedDelivery}
                  index={index}
                  handleEdit={handleEditAddress}
                  handleDelete={handleDeleteAddress}
                />
              ))}
          </Addresses>
        </Section>
      </Wrapper>
      <Footer />
    </>
  );
};

export default Account;
