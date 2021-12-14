import React, { useState } from "react";
import styled from "styled-components";
import TagList from "./TagList";
import Button from "./Button";
import { device } from "../utils/devices";
import { addToCart, fetchCart } from "../actions/CartActions";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Select, Input, message } from "antd";
import ProductProducerSelect from "./ProductProducerSelect";
import { fetchProducer } from '../actions/ProductActions';

const { Option } = Select;

const Wrapper = styled.div`
  border-bottom: 1px solid ${props => props.theme.border};
  color: ${props => props.theme.secondary};

  .ant-select {
    height: 100%;
    width: 100%;

    .ant-select-selection,
    .ant-select-selection__rendered {
      height: 100%;
    }

    .ant-select-selection-selected-value {
      display: flex !important;
      height: 100%;
      align-items: center;
    }
  }

  @media ${device.laptop} {
    /* top: calc(6rem + 33px);
    height: calc(100vh - 6rem  - 33px); */
  }

  h1 {
    font-family: ${props => props.theme.body};
    font-weight: 400;
  }

  p {
    font-family: ${props => props.theme.body};
    font-size: 18px;
    line-height: 1.4em;
  }
`;

const Price = styled.span`
  font-size: 18px;
  font-family: ${props => props.theme.sans};
  margin-bottom: 1rem;
  display: block;
`;

const Quantity = styled.div``;

const Counter = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
  grid-gap: 1rem;
  margin-bottom: 1rem;

  input {
    height: 100%;
  }

  div {
    border-radius: 4px;
    background: ${props => props.theme.bg};
    color: ${props => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 18px;

    span {
      margin-left: 1rem;
    }
  }
`;

const Bold = styled.p`
  font-weight: bold;
  display: inline;
  padding-left: 10px;
`;

const ProductInfo = ({
  selectedProducer,
  producers,
  handleModal,
  addToCart,
  title,
  toggleProducer,
  description,
  tags,
  user,
  fee,
  cart,
  image,
  fetchCart,
  uid,
  keys,
  history,
  producerName
}) => {
  const [count, setCount] = useState(1);
  const [selectedOption, setOption] = useState(0);

  const incrementCount = max => {
    setCount(max ? (count >= max ? max : Number(count) + 1) : Number(count) + 1);
  };

  const decrementCount = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const addItem = () => {
    if (user.loggedIn) {
      addToCart(
        user.uid,
        {
          title: title,
          max: producers[selectedProducer].units[selectedOption].max || 0,
          price: (Number(producers[selectedProducer].units[selectedOption].price) + Number(fee)),
          image: image,
          count: Number(count),
          uid: uid,
          unit: producers[selectedProducer].units[selectedOption].value,
          producer: selectedProducer,
          producerName: producerName,
        },
        cart
      ).then(() => {
        message.success("Added to Cart");
        fetchCart(user.uid);
      });
    } 
    else {
      handleModal(true);
    }
  }

  producers[selectedProducer].units = producers[selectedProducer].units.filter(
    (unit) => {
      if (unit.max && unit.max <= 0) {
        return false;
      }
      return true;
    }
  );

  if (producers[selectedProducer].units[selectedOption].max) {
    if (count > producers[selectedProducer].units[selectedOption].max) {
      setCount(producers[selectedProducer].units[selectedOption].max);
    }
  }

  return (
    <Wrapper>
      <div>
        <h1>{title}</h1>
        {producers[selectedProducer] &&
          producers[selectedProducer].units
            .filter((unit) => {
              if (unit.max && unit.max <= 0) {
                return false;
              }
              return true;
            })
            .map((unit) =>
              unit.value === "each" ? (
                <Price key={unit.value}>
                  ${Number(Number(unit.price) + Number(fee)).toFixed(2)}{" "}
                  {unit.value}
                </Price>
              ) : (
                <Price key={unit.value}>
                  ${Number(Number(unit.price) + Number(fee)).toFixed(2)} per{" "}
                  {unit.value}
                  {(unit.max && !isNaN(unit.max)) && <Bold>In Stock: {unit.max}</Bold>}
                </Price>
              )
            )}
        {producers[selectedProducer] && (
          <ProductProducerSelect
            options={producers}
            toggleProducer={toggleProducer}
            selectedOption={selectedProducer}
            keys={keys}
          />
        )}
        <p>{description}</p>
        <TagList tags={tags} />
      </div>
      <Quantity>
        <Counter count={count}>
          <Button onClick={() => decrementCount()}>-</Button>
          <Input
            type="number"
            size="large"
            onFocus={(e) => e.target.select()}
            onChange={(e) => {
              let { value } = e.target;
              const max = Number(
                producers[selectedProducer].units[selectedOption].max
              );

              if (Number(value) > 1) {
                if (value >= max) {
                  setCount(max);
                } else {
                  setCount(Number(value));
                }
              } else {
                setCount(1);
              }
            }}
            value={count}
            max={
              Number(producers[selectedProducer].units[selectedOption].max) ||
              null
            }
            suffix={
              <span>
                ($
                {(
                  count *
                  (Number(
                    producers[selectedProducer].units[selectedOption].price
                  ) +
                    Number(fee))
                ).toFixed(2)}
                )
              </span>
            }
          />
          <Button
            onClick={() =>
              incrementCount(
                Number(producers[selectedProducer].units[selectedOption].max) ||
                  null
              )
            }
          >
            +
          </Button>
        </Counter>
        <Select
          defaultValue={0}
          title="Unit"
          size="large"
          placeholder="Choose unit"
          onChange={(value) => setOption(value)}
        >
          {producers[selectedProducer] &&
            producers[selectedProducer].units
              .filter((unit) => {
                if (unit.max && unit.max <= 0) {
                  return false;
                }
                return true;
              })
              .map((unit, index) => (
                <Option key={index} value={index}>
                  {unit.value}
                </Option>
              ))}
        </Select>
      </Quantity>
      <br />
      <Button
        disabled={
          selectedOption === null ||
          Number(producers[selectedProducer].units[selectedOption].max) === 0
        }
        onClick={addItem}
        full
      >
        Add to Cart
      </Button>
    </Wrapper>
  );
};

export default withRouter(
  connect(
    (state, ownProps) => ({
      user: state.user,
      cart: state.cart
    }),
    { addToCart, fetchCart, fetchProducer }
  )(ProductInfo)
);
