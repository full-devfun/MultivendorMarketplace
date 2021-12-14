import { useState } from "react";
import { db } from "../Firebase";

const useFetchProducers = () => {
  const [producers, setProducers] = useState([]);
  const [loading, setLoading] = useState(true);

  let producerList = [];
  let producersObj = {};

  const fetchProducers = async () => {
    let producersRef = await db.collection("producers").get();
    let productsRef = await db.collection("products").get();

    for (let item of productsRef.docs) {
      if (item.data().producers) {
        let data = item.data();

        let producerIDs = data.producers.map((item) => Object.keys(item)[0]);

        let producerSet = [...new Set(producerIDs)];

        for (let producer of producerSet) {
          producersObj[producer] = producersObj[producer]
            ? [...producersObj[producer], data]
            : [data];
        }
      }
    }

    for (let producer of producersRef.docs) {
      let data = producer.data();
      if (producersObj[data.uid]) {
        data.products = producersObj[data.uid];
        producerList.push(data);
      }
    }
    setProducers(
      producerList.sort(
        (a, b) => parseFloat(b.products.length) - parseFloat(a.products.length)
      )
    );
    setLoading(false);
  };

  return [producers, fetchProducers, loading];
};

export default useFetchProducers;
