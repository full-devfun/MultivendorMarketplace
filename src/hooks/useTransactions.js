import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { db } from "../Firebase";

const useTransactions = (uid) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const unsubscribe = () =>
      db
        .collection("transactions")
        .where("user.uid", "==", uid)
        .onSnapshot(
          (snapshot) => {
            const data = [];
            snapshot.forEach((doc) => {
              data.push(doc);
            });
            setLoading(false);
            setTransactions(data);
          },
          (err) => {
            setError(err);
          }
        );
    if (uid) {
      unsubscribe();
    }
  }, [uid]);

  return {
    error,
    loading,
    transactions,
  };
};

export default useTransactions;
