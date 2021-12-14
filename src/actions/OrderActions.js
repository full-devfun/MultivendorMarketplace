import { db } from "../Firebase";
import getChargeDate from "../utils/getChargeDate";

export const FETCH_ORDER = "fetch_order";

export function fetchOrder(user) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .collection("orders")
      .get()
      .then((snapshot) => {
        const items = {};

        snapshot.forEach((doc) => {
          items[doc.id] = doc.data();
        });

        return dispatch({
          type: FETCH_ORDER,
          payload: items,
        });
      });
  };
}

export function updateOrder(user, cart, currentOrder, transactionId) {
  return (dispatch) => {
    return cart.map((item) => {
      if (typeof currentOrder[item.uid] === "undefined") {
        const { count, price, image, title, unit, uid } = cart[item];
        return db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(item.id)
          .set({
            count: count,
            price: price,
            image: image,
            title: title,
            unit: unit,
            uid: uid,
            chargeDate: getChargeDate().valueOf(),
          });
      } else {
        return db
          .collection("users")
          .doc(user.uid)
          .collection("orders")
          .doc(item.id)
          .update({
            count: cart[item].count + currentOrder[item].count,
          });
      }
    });
  };
}

export function removeItem(user, item) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .collection("orders")
      .doc(item)
      .delete();
  };
}
