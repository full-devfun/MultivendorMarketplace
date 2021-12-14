import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Card, Button } from "antd";
import useCards from "../../hooks/useCards";
import Checkout from "../Checkout";
import { fetchCards, removeCard } from "../../actions/CardActions";

const Wrapper = styled.div`
  form {
    margin: 0;
  }
`;

const CardList = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
`;

const Cards = () => {
  const user = useSelector((state) => state.user);
  const cards = useSelector((state) => state.cards.cards);
  const [cardsOptions, setCardOptions] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user.default_source) {
      dispatch(
        fetchCards(user.uid, { name: "", value: {} }, user.default_source)
      );
    }
  }, []);

  useEffect(() => {
    setCardOptions(Object.values(cards));
  }, [cards]);

  const handleRemoveCard = (card) => {
    const { uid } = user;
    const { id } = card;
    removeCard(uid, id).then(() => {
      fetchCards(user);
    });
  };

  const handleAddCard = (card) => {
    console.log("card");
  };

  return (
    <Wrapper>
      <Card title="Add Card">
        <Checkout
          className="form"
          buttonText="Add Card"
          handleSubmit={handleAddCard}
        />
      </Card>
      <br />
      <br />
      {user.uid && cardsOptions.length > 0 ? (
        <CardList>
          {cardsOptions.map((card) => {
            const { name } = card;
            const { id, exp_year, exp_month } = card.details.card;

            return (
              <Card
                key={id}
                title={name}
                extra={
                  <Button type="link" onClick={() => handleRemoveCard(card)}>
                    Delete
                  </Button>
                }
              >
                Expires {exp_month} / {exp_year}
              </Card>
            );
          })}
        </CardList>
      ) : (
        <div>
          <p>No cards added</p>
        </div>
      )}
    </Wrapper>
  );
};

export default Cards;
