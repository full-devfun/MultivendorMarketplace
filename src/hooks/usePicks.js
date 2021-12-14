import { useState, useEffect } from "react";
import { db } from "../Firebase";

const usePicks = producers => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const items = [];

    const unsubscribe = async () =>
      producers.map(async producer => {
        try {
          const res = await db
            .collectionGroup("producers")
            .where("uid", "==", producer)
            .get();
          res.docs.map(async doc => {
            if (doc.data().units) {
              items.push(doc.data());
              setProducts([...items]);
              setLoading(false);
            }
          });
        } catch (err) {
          setError(err);
        }
      });

    return () => unsubscribe();
  }, [producers]);

  return {
    error,
    loading,
    products
  };
};

export default usePicks;
