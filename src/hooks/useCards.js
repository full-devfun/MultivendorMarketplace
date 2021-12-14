import { useState, useEffect } from "react";
import { db } from "../Firebase";

const useCards = (uid) => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [cards, setCards] = useState([]);

  useEffect(() => {
    const unsubscribe = db
      .collection("users")
      .doc(uid)
      .collection("paymentMethods")
      .onSnapshot(
        (snapshot) => {
          const data = [];
          snapshot.forEach((doc) => {
            data.push(doc.data());
          });
          setLoading(false);
          setCards(data);
        },
        (err) => {
          setError(err);
        }
      );

    return () => unsubscribe();
  }, [uid]);

  return {
    error,
    loading,
    cards,
  };
};

export default useCards;
