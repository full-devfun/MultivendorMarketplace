import { db } from "../Firebase.js";
import firebase from "firebase/app";

export const FETCH_PRODUCTS = "fetch_products";
export const FETCH_TAGGED_PRODUCTS = "fetch_tagged_products";
export const FETCH_CATEGORY = "fetch_category";

const currentDate = new Date();
const month = currentDate.getMonth();

export function fetchProducts() {
  return dispatch => {
    return db
      .collection("products")
      .get()
      .then(snapshot => {
        const products = {};

        snapshot.forEach(doc => {
          products[doc.id] = doc.data();
        });

        return dispatch({
          type: FETCH_PRODUCTS,
          payload: products
        });
      });
  };
}

export function fetchTaggedProducts(tag) {
  return dispatch => {
    return db
      .collection("products")
      .where("tags", "array-contains", tag)
      .get()
      .then(snapshot => {
        const products = {};

        snapshot.forEach(doc => {
          products[doc.id] = doc.data();
        });

        return products;
      });
  };
}

export function fetchCategory(cat) {
  return dispatch => {
    return db
      .collection("products")
      .where("category", "==", cat)
      .get()
      .then(snapshot => {
        const products = {};

        snapshot.forEach(doc => {
          products[doc.id] = doc.data();
        });

        return products;
      });
  };
}

export function fetchProductProducers(product) {
  return db
    .collection("products")
    .doc(product)
    .collection("producers")
    .get()
    .then(snapshot => {
      const producers = {};
      snapshot.forEach(doc => {
        let object = doc.data()
        producers[doc.id] = object;
      });

      const filterProducers = {}

      for (const doc in producers) {
        if (producers.hasOwnProperty(doc)) {
          const object = producers[doc];
          if (!object.units) {
            continue;
          }

          const totalCount = object.units.length;
          let count = 0;
          for (let type of object.units) {
            if (type.max && type.max < 1) {
              count += 1;
            }
          }

          if (count >= totalCount) {
            continue;
          }

          if (!object.seasons) {
            continue;
          }

          if ((month === 11 || month <= 1) && object.seasons.includes("winter")) {
            filterProducers[doc] = object;
            continue;
          } else if (month >= 2 && month <= 4 && object.seasons.includes("spring")) {
            filterProducers[doc] = object;
            continue;
          } else if (month >= 5 && month <= 7 && object.seasons.includes("summer")) {
            filterProducers[doc] = object;
            continue;
          } else if (month >= 8 && month <= 10 && object.seasons.includes("fall")) {
            filterProducers[doc] = object;
            continue;
          }
          continue;
        }
      }

      return filterProducers;
    });
}

export function fetchProducer(user) {
  return dispatch => {
    return db
      .collection("producers")
      .doc(user)
      .get()
      .then(doc => {
        return doc.data();
      });
  };
}

export function fetchUserProducts(user) {
  return dispatch => {
    return db
      .collectionGroup("producers")
      .where(`uid`, "==", user)
      .get()
      .then(snapshot => {
        let products = [];

        snapshot.forEach(doc => {
          if (doc.data().units) {
            products = [doc.data(), ...products];
          }
        });
        return products;
      });
  };
}

export function rateProduct(
  transaction,
  producer,
  product,
  rating,
  user,
  comment,
  title,
  image
) {
  return db
    .collection("products")
    .doc(product)
    .collection("producers")
    .doc(producer)
    .collection("ratings")
    .add({
      rating: rating,
      comment: comment,
      user: user,
      createdAt: firebase.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      return db
        .collection("transactions")
        .doc(transaction)
        .update({
          [`items.${product}.rating`]: rating,
          [`items.${product}.comment`]: comment,
          [`items.${product}.title`]: title,
          [`items.${product}.image`]: image,
        });
    })
    .catch(err => console.log(err));
}

export async function fetchProductRatings(producer, product) {
  return await db
    .collection("products")
    .doc(product)
    .collection("producers")
    .doc(producer)
    .collection("ratings")
    .orderBy("createdAt", "asc")
    .get()
    .then(snapshot => {
      let ratings = [];

      snapshot.forEach(doc => {
        ratings = [doc.data(), ...ratings];
      });

      return ratings;
    })
    .catch(err => console.log(err));
}

export async function fetchSingleProduct(id) {
  const product = await db
    .collection(`products`)
    .doc(id)
    .get();
  if (product.data()) {
    const { category } = product.data();
    const categoryData = await db
      .collection(`categories`)
      .doc(category)
      .get();
    const { fee } = categoryData.data();
    return {
      ...product.data(),
      fee: fee
    };
  } else {
    return null
  }
}
