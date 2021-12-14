import { auth, db } from "../Firebase.js";
import firebase from "firebase/app";

export const LOGIN_USER = "login_user";
export const LOGOUT_USER = "logout_user";
export const SET_SELECTED_CARD = "set_selected_card";
export const CLEAR_CARDS = "clear_cards";
export const SET_SELECTED_ADDRESS = "set_selected_address";
export const CLEAR_ADDRESS = "clear_address";

export function loginUser() {
  return (dispatch) => {
    return auth.onAuthStateChanged((user) => {
      if (user) {
        const { providerId } = user.providerData[0];
        return db
          .collection("users")
          .doc(user.uid)
          .get()
          .then((userDoc) => {
            if (userDoc.exists) {
              const data = userDoc.data();
              if (data.default_source) {
                dispatch({
                  type: SET_SELECTED_CARD,
                  payload: data.default_source,
                });
              }
              return dispatch({
                type: LOGIN_USER,
                payload: userDoc.data(),
              });
            } else {
              return db
                .collection("users")
                .doc(user.uid)
                .set({
                  displayName: user.displayName,
                  email: user.email,
                  uid: user.uid,
                  photoURL: user.photoURL ? user.photoURL : null,
                  provider: providerId,
                  emailVerified: user.emailVerified
                    ? user.emailVerified
                    : false,
                  following: [],
                  email_options: {
                    marketing: true,
                  },
                });
            }
          });
      } else {
        return dispatch({
          type: LOGOUT_USER,
        });
      }
    });
  };
}

export function logoutUser() {
  return (dispatch) => {
    return auth
      .signOut()
      .then(() => {
        dispatch({ type: CLEAR_CARDS });
        dispatch({ type: CLEAR_ADDRESS });
        return dispatch({
          type: LOGOUT_USER,
        });
      })
      .catch((err) => {
        console.error(err);
      });
  };
}
// }

export const setSelectedCard = () => {
  return async (dispatch) => {};
};

export function followProducer(user, producer) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .set(
        {
          following: firebase.firestore.FieldValue.arrayUnion({
            producer: producer,
            date: Date.now(),
          }),
        },
        { merge: true }
      )
      .then(() => {
        return db
          .collection("producers")
          .doc(producer)
          .set(
            {
              followers: firebase.firestore.FieldValue.arrayUnion(user),
            },
            { merge: true }
          );
      })
      .then(() => {
        const date = new Date();
        const year = date.getFullYear();
        const month = `${date.getMonth() + 1}`.padStart(2, "0");
        const day = `${date.getDay()}`.padStart(2, "0");

        return db
          .collection("producers")
          .doc(producer)
          .collection("analytics")
          .doc(`${year}-${month}-${day}`)
          .set(
            {
              followers: firebase.firestore.FieldValue.increment(1),
            },
            { merge: true }
          );
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function unfollowProducer(user, producer) {
  return (dispatch) => {
    return db
      .collection("users")
      .doc(user)
      .set(
        {
          following: firebase.firestore.FieldValue.arrayRemove(producer),
        },
        { merge: true }
      )
      .then(() => {
        return db
          .collection("producers")
          .doc(producer)
          .set(
            {
              followers: firebase.firestore.FieldValue.arrayRemove(user),
            },
            { merge: true }
          );
      })
      .catch((err) => {
        console.error(err);
      });
  };
}

export function signInWithEmail(email, password) {
  return firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      return {
        success: true,
      };
    })
    .catch((err) => {
      return {
        success: false,
        error: err,
      };
    });
}

export function addShippingAddress(user, address) {
  return db
    .collection("users")
    .doc(user)
    .set(
      {
        addresses: firebase.firestore.FieldValue.arrayUnion(address),
      },
      { merge: true }
    )
    .catch((err) => {
      console.error(err);
    });
}

export const interestedProducer = async (email) => {
  try {
    let ref = db.collection("interestedProducers");
    await ref.add({ email });
  } catch (error) {
    console.log("Error during interestedProducer", error);
  }
};
