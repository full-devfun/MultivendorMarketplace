import { db, analytics } from "../Firebase";
import firebase, { firestore } from "firebase/app";

export const FETCH_CART = "fetch_cart";
export const ADD_TO_CART = "add_to_cart";
export const REMOVE_FROM_CART = "remove_from_cart";
export const CLEAR_CART = "clear_cart";
export const UPDATE_ITEM = "update_item";

export function fetchCart(user) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .collection("basket")
      .get()
      .then((snapshot) => {
        let products = [];

        snapshot.forEach((doc) => {
          products = [...products, { id: doc.id, ...doc.data() }];
        });

        return dispatch({
          type: FETCH_CART,
          payload: products,
        });
      });
  };
}

export function addToCart(user, item, cart) {
  return (dispatch) => {
    analytics.logEvent("add_to_cart", {
      quantity: item.count,
      item_name: item.title,
      max: item.max,
      item_id: item.uid,
      producer: item.producer,
      price: item.price,
      value: item.price * item.count,
      currency: "USD",
    });
    return db.collection("users").doc(user).collection("basket").add(item);
  };
}

export function updateItem(user, item, count) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .collection("basket")
      .doc(item)
      .set({ count: count }, { merge: true });
  };
}

export function removeFromCart(user, item) {
  return (dispatch) => {
    analytics.logEvent("remove_from_cart", {
      quantity: item.count,
      item_name: item.title,
      item_id: item.id,
      producer: item.producer,
      price: item.price,
      value: item.price * item.count,
      currency: "USD",
    });
    return db
      .collection("users")
      .doc(user)
      .collection("basket")
      .doc(item.id)
      .delete();
  };
}

export function clearCart(user) {
  // console.log('CLEARCART')
  // return dispatch => {
  // return db
  //   .collection("users")
  //   .doc(user)
  //   .collection("basket")
  //   .get()
  //   .then(function(querySnapshot) {
  //     console.log(querySnapshot);
  //     querySnapshot.forEach(function(doc) {
  //       console.log("for each");
  //       doc.ref.delete();
  //     }
  //   )
  //   return dispatch({
  //     type: CLEAR_CART
  //   })
  // })
  // }
}

export function checkStock(cart) {
  return async (dispatch) => {
    let approved = true;

    for (let item of cart) {
      const { count, uid, producer, unit } = item;
      var stockRef = db
        .collection("products")
        .doc(uid)
        .collection("producers")
        .doc(producer);
      let query = await stockRef.get();

      if (query.exists) {
        let response = query.data();
        for (let dbUnit of response.units) {
          if (dbUnit.max || dbUnit.max <= 0) {
            if (dbUnit.value === unit && Number(dbUnit.max) < count) {
              approved = false;
            }
          }
        }
      } else {
        console.log("No such document!");
      }
    }
    return approved;
  };
}
export function purchaseCart(
  user,
  cart,
  token,
  total,
  currentTotal,
  address,
  transactionId,
  transferGroup
) {
  return async (dispatch) => {
    let approved = true;

    for (let item of cart) {
      const { count, uid, producer, unit } = item;
      var stockRef = db
        .collection("products")
        .doc(uid)
        .collection("producers")
        .doc(producer);
      let query = await stockRef.get();

      if (query.exists) {
        let response = query.data();
        for (let dbUnit of response.units) {
          if (dbUnit.max || dbUnit.max <= 0) {
            if (dbUnit.value === unit && Number(dbUnit.max) < count) {
              approved = false;
            }
          }
        }
      } else {
        console.log("No such document!");
      }
    }

    if (approved) {
      const producers = {};
      const producersInOrder = {};
      const date = new Date();
      const year = date.getFullYear();
      const month = `${date.getMonth() + 1}`.padStart(2, "0");
      let day = `${date.getDate()}`;
      day = day.length > 1 ? day : `0${day}`;

      Object.keys(cart).map((item) => {
        const { title, count, uid, price, producer } = cart[item];

        analytics.logEvent("purchase", {
          quantity: count,
          item_name: title,
          item_id: uid,
          producer: producer,
          price: Number(price),
          value: Number(price * count),
          currency: "USD",
          transaction_id: transactionId,
          transfer_group: transferGroup,
        });

        db.collection("producers")
          .doc(producer)
          .collection("analytics")
          .doc(`${year}-${month}-${day}`)
          .get()
          .then(async (doc) => {
            if (doc.exists) {
              const { products, sales, orders } = doc.data();

              if (products && products[uid]) {
                const newCount = Number(count) + products[uid];

                await db
                  .collection("producers")
                  .doc(producer)
                  .collection("analytics")
                  .doc(`${year}-${month}-${day}`)
                  .set(
                    {
                      products: {
                        ...products,
                        [uid]: newCount,
                      },
                    },
                    { merge: true }
                  );
              } else {
                await db
                  .collection("producers")
                  .doc(producer)
                  .collection("analytics")
                  .doc(`${year}-${month}-${day}`)
                  .set(
                    {
                      products: {
                        ...products,
                        [uid]: count,
                      },
                    },
                    { merge: true }
                  );
              }
            } else {
              return db
                .collection("producers")
                .doc(producer)
                .collection("analytics")
                .doc(`${year}-${month}-${day}`)
                .set({
                  products: {
                    [uid]: count,
                  },
                });
            }
          });

        producersInOrder[producer] = true;

        return (producers[producer] =
          producers[producer] && producers[producer][uid]
            ? {
                ...producers[producer],
                [uid]: {
                  ...producers[producer][uid],
                  count: producers[producer][uid].count + count,
                  total: producers[producer][uid].total + price * count,
                },
                totalOrderSales: producers[producer].totalOrderSales
                  ? producers[producer].totalOrderSales + price * count
                  : price * count,
              }
            : {
                ...producers[producer],
                [uid]: { count, total: price * count },
                totalOrderSales:
                  producers[producer] && producers[producer].totalOrderSales
                    ? producers[producer].totalOrderSales + price * count
                    : price * count,
              });
      });

      return db
        .collection("transactions")
        .add({
          user: {
            uid: user.uid,
            photoURL: user.photoURL ? user.photoURL : "",
            displayName: user.displayName,
          },
          shippingAddress: address,
          total: total,
          created_at: Date.now(),
          token: token,
          items: [...cart],
          producers: producers,
          producersInOrder,
          status: "processing",
          transaction_id: transactionId,
          transfer_group: transferGroup,
        })
        .then((docRef) => {
          const producerSales = {};
          Object.keys(cart).map((item) => {
            const { producer, count, price, uid } = cart[item];
            const amount = count * price;
            producerSales[producer] = {
              [uid]: { count, price, total: amount },
            };

            return db
              .collection("producers")
              .doc(producer)
              .collection("analytics")
              .doc(`${year}-${month}-${day}`)
              .set(
                {
                  orders: firebase.firestore.FieldValue.increment(1),
                  sales: firebase.firestore.FieldValue.increment(amount),
                },
                { merge: true }
              );
          });
          return docRef;
        })
        .then((docRef) => {
          Object.keys(cart).map(async (item) => {
            // Working here!!
            const { count, uid, producer, unit } = cart[item];
            let newUnitsArray = [];
            var stockRef = db
              .collection("products")
              .doc(uid)
              .collection("producers")
              .doc(producer);
            await stockRef
              .get()
              .then(function (doc) {
                if (doc.exists) {
                  const response = doc.data();
                  for (let i of response.units) {
                    if (i.value === unit) {
                      let obj;
                      if (i.max && i.max > 0) {
                        let newStock = Number(i.max) - Number(count);
                        obj = {
                          price: i.price,
                          value: i.value,
                          max: String(newStock),
                        };
                      } else {
                        obj = {
                          price: i.price,
                          value: i.value,
                        };
                      }

                      newUnitsArray.push(obj);
                    } else {
                      newUnitsArray.push(i);
                    }
                  }
                } else {
                  console.log("No such document!");
                }
              })
              .catch(function (error) {
                console.log("Error getting document:", error);
              });

            await db
              .collection("products")
              .doc(uid)
              .collection("producers")
              .doc(producer)
              .set(
                {
                  units: newUnitsArray,
                },
                { merge: true }
              );
          });

          return docRef;
        })
        .then((docRef) => {
          Object.keys(cart).map(async (item) => {
            await db
              .collection("users")
              .doc(user.uid)
              .collection("basket")
              .doc(cart[item].id)
              .delete();
          });
          dispatch({
            type: CLEAR_CART,
          });
          return docRef;
        })
        .then((docRef) => {
          db.collection("transactions").doc(docRef.id).set(
            {
              orderNumber: docRef.id,
              transaction_id: transactionId,
            },
            { merge: true }
          );
          return docRef.id;
        });
    } else {
      alert(
        "Sorry! There is no longer enough stock for your order. Try again for updated information"
      );
      return Promise.resolve("ERROR-ID");
    }
  };
}
