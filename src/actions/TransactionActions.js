import { db } from '../Firebase'

export const FETCH_TRANSACTIONS = 'fetch_transactions';

export function fetchTransactions(transaction) {
  return dispatch => {
    return db.collection('transactions').doc(transaction).get()
    .then(snapshot => {

       return dispatch({
        type: FETCH_TRANSACTIONS,
        payload: snapshot.data()
      })
    })
  }
}

export function fetchUserTransactions(user) {
  return dispatch => {
    return db
      .collection("transactions")
      .where("user.uid", "==", user)
      .get()
      .then((snapshot) => {
        const items = {};

        snapshot.forEach((doc) => {
          items[doc.id] = doc.data();
        });
        return dispatch({
          type: FETCH_TRANSACTIONS,
          payload: items,
        });
      });
  }
}
