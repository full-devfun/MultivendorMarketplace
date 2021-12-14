import React, { useState, useEffect } from "react";
import Select from "react-select";
import { connect, useSelector, useDispatch } from "react-redux";
import {
  addCard,
  removeCard,
  fetchCards,
  SET_SELECTED,
} from "../actions/CardActions";
import styled from "styled-components";
import CartStripe from "./CartStripe";

const Wrapper = styled.div`
  margin-bottom: 2rem;
`;

function CardSelect(props) {
  const selected = useSelector((state) => state.cards.selected);
  const cards = useSelector((state) => state.cards.cards);
  const user_source = useSelector((state) => state.user.default_source);
  const dispatch = useDispatch();
  const [options, setOptions] = useState([
    { value: "addNew", label: "Add New Card" },
  ]);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (user_source) {
      dispatch(fetchCards(props.user.uid, selected, user_source));
    }
  }, []);

  useEffect(() => {
    getCards();

    setLoaded(true);
  }, [cards, selected]);

  const getCards = async () => {
    const { default_source, uid } = props.user;

    // if there are multiple cards
    if (Object.keys(cards).length > 0) {
      setOptions([
        ...Object.values(cards).map((item) => {
          const { card, id } = item.details;
          const { name } = item;

          if (name != "") {
            return { value: item, label: `${name} ${card.last4}` };
          } else {
            return { value: item, label: `${card.brand} ${card.last4}` };
          }
        }),
        { value: "addNew", label: "Add New Card" },
      ]);
    }
  };

  const handleChange = (selectedOption) => {
    dispatch({ type: SET_SELECTED, payload: selectedOption });
  };

  const handleSubmit = (e, card) => {
    props.handleSubmit(card);
  };

  return (
    <Wrapper>
      Choose card
      {selected && loaded && (
        <Select value={selected} onChange={handleChange} options={options} />
      )}
      {loaded && selected.value === "addNew" && (
        <CartStripe
          buttonText="Add Card"
          type="secondary"
          handleSubmit={handleSubmit}
        />
      )}
    </Wrapper>
  );
}

export default connect(
  (state, ownProps) => ({
    user: state.user,
    cards: state.cards,
  }),
  { fetchCards, addCard, removeCard }
)(CardSelect);
