import { db } from "../Firebase";

export const GET_CARDS = "get_cards";
export const SET_SELECTED = "select_card";

export async function addCard(
  user,
  payment,
  name,
  stripe,
  message,
  handleSubmit
) {
  try {
    await db
      .collection("users")
      .doc(user.uid)
      .collection("paymentMethods")
      .doc(payment.paymentMethod.id)
      .set({
        name: name,
        details: payment.paymentMethod,
      });
    await db.collection("users").doc(user.uid).set(
      {
        default_source: payment.paymentMethod.id,
      },
      { merge: true }
    );

    return;
  } catch (err) {
    console.log("ERROR ==>", err);

    return message.error(err.message);
  }
}

export function removeCard(user, card) {
  return db
    .collection("users")
    .doc(user)
    .collection("sources")
    .doc(card)
    .delete();
}

export function changeDefault(user, card) {
  return (dispatch) =>
    db.collection("users").doc(user).set(
      {
        default_source: card,
      },
      { merge: true }
    );
}

export function fetchCards(user, selected, default_source) {
  return (dispatch) =>
    db
      .collection("users")
      .doc(user)
      .collection("paymentMethods")
      .get()
      .then((snapshot) => {
        const cards = {};

        snapshot.forEach((doc) => {
          cards[doc.id] = doc.data();
        });

        const match = Object.values(cards).find((vals) => {
          if (selected.value.id) {
            return vals.details.id === selected.value.id;
          } else {
            return vals.details.id === default_source;
          }
        });
        const dispatchValue = { label: match.name, value: match.details };
        dispatch({
          type: SET_SELECTED,
          payload: dispatchValue,
        });
        return dispatch({
          type: GET_CARDS,
          payload: cards,
        });
      });
}
