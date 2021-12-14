import React, { useEffect } from "react";
import styled from "styled-components";
import getDeliveryDate from "../utils/getDeliveryDate";
import Moment from "react-moment";

const Wrapper = styled.div`
  background: ${(props) => props.theme.bg};
  padding: 2rem;
  border-radius: 5px;

  h4 {
    font-size: 18px;
  }
`;

const Items = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 2rem;
`;

const Actions = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-end;
  box-sizing: border-box;
  padding: 0.5rem;
`;

const Item = styled.div`
  overflow: hidden;
  position: relative;

  p {
    margin-top: 1rem;
  }

  &:hover {
    ${Actions} {
      z-index: 1;
    }
  }
`;

const Image = styled.div`
  padding-bottom: 100%;
  position: relative;
  overflow: hidden;
  border-radius: 5px;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

function calcSubTotal(items) {
  let total = 0;

  for (let item of items) {
    total += item.price * item.count;
  }

  return total;
}

const UpcomingOrder = ({ uid, orders }) => {
  let items = [];

  useEffect(() => {
    console.log("ORDERS", orders);
  }, []);

  let dt = new Date(getDeliveryDate());

  dt.setDate(dt.getDate() - 2);

  Object.keys(orders)
    .filter((order) => {
      if (orders[order].status === "delivered") {
        return false;
      }
      return true;
    })
    .map((order) => {
      for (let item in orders[order].items) {
        orders[order].items[item].created_at = orders[order].created_at;
      }
      items = [...items, ...orders[order].items];
      return null;
    });

  items = items.filter((item) => {
    if (item.created_at < dt.getTime()) {
      return true;
    }
    return false;
  });

  if (items.length === 0) {
    return (
      <>
        No Orders will be ready to ship by{" "}
        <Moment format="dddd, LL">{getDeliveryDate()}</Moment>
      </>
    );
  }
  return (
    <Wrapper>
      <h4>
        Delivered by <Moment format="dddd, LL">{getDeliveryDate()}</Moment>
        <br />
      </h4>
      <br />
      <Items>
        {items.map((item, index) => {
          const { image, thumbnail, title, count, price, producerName } = item;

          return (
            <Item key={index}>
              <Image>
                <img src={thumbnail || image} alt={title} />
              </Image>
              <p>
                {title} x{count}
              </p>
              <p>{producerName}</p>
              <p>(${(price * count).toFixed(2)})</p>
            </Item>
          );
        })}
      </Items>
      <h4>Total: ${calcSubTotal(items).toFixed(2)}</h4>
      {calcSubTotal(items) < 40 ? (
        <>
          {calcSubTotal(items) === 0 ? (
            <p>Shipping: None</p>
          ) : (
            <p>Shipping: $9.99</p>
          )}
        </>
      ) : (
        <p>Shipping: FREE</p>
      )}
    </Wrapper>
  );
};

export default UpcomingOrder;
