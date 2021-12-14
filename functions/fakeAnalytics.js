const functions = require("firebase-functions");
const admin = require("firebase-admin");
const faker = require("faker");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://local-guru-aeac9.firebaseio.com"
});

let data = [
  `2020-02-01`,
  `2020-02-02`,
  `2020-02-03`,
  `2020-02-04`,
  `2020-02-05`,
  `2020-02-06`,
  `2020-02-07`,
  `2020-02-08`,
  `2020-02-09`,
  `2020-02-10`,
  `2020-02-11`,
  `2020-02-12`,
  `2020-02-13`,
  `2020-02-14`,
  `2020-02-15`,
  `2020-02-16`,
  `2020-02-17`,
  `2020-02-18`,
  `2020-02-19`,
  `2020-02-20`,
  `2020-02-21`,
  `2020-02-22`,
  `2020-02-23`,
  `2020-02-24`,
  `2020-02-25`,
  `2020-02-26`,
  `2020-02-27`,
  `2020-02-28`,
  `2020-02-29`,
  `2020-03-01`,
  `2020-03-02`,
  `2020-03-03`,
  `2020-03-04`,
  `2020-03-05`,
  `2020-03-06`,
  `2020-03-07`,
  `2020-03-08`,
  `2020-03-09`,
  `2020-03-10`,
  `2020-03-11`,
  `2020-03-12`,
  `2020-03-13`,
  `2020-03-14`,
  `2020-03-15`,
  `2020-03-16`,
  `2020-03-17`,
  `2020-03-18`,
  `2020-03-19`,
  `2020-03-20`,
  `2020-03-21`,
  `2020-03-22`,
  `2020-03-23`,
  `2020-03-24`,
  `2020-03-25`,
  `2020-03-26`,
  `2020-03-27`,
  `2020-03-28`,
  `2020-03-29`,
  `2020-03-30`
];

const products = [
  "7",
  "8",
  "a1bm5Nybd1",
  "9nFKAkdOr8",
  "LMVhjMkys6",
  "G4Kl3delQm",
  "EHl0yA89zO",
  "WcGSZmTOKB",
  "fYzfa50Um4",
  "Wn3a0oUVLO",
  "902oITA1FYcd2CwqTQzv",
  "bDXBZZ0seE",
  "IoxM2hMCXT",
  "V1T38RBlJr",
  "aHfd5TyUwC",
  "DwlWRLctQa",
  "LHAmBVU1e6DZ6UPlguCN",
  "f5nsjUjU8S",
  "BaRerx5iAs5Fjp2iQcT3",
  "9",
  "Y8MdaDTQTB7yiCtyqYPR",
  "OaN4kCW6xaXt2sSSZafW",
  "JBUqbO83byuRFf8Y48QJ",
  "SCdUUPR91ccZyPyomo3m",
  "88BFPQs6AS",
  "b8mI9HBjfTjFbgOkUC2k",
  "9U9ieJh5v58rsghYVsi3"
];

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive
}

return data.reverse().map((day, index) => {
  var d = new Date();
  const date = d.setDate(d.getDate() - index);
  if (index === 0) {
    console.log(date);
  }

  return admin
    .firestore()
    .collection("producers")
    .doc("9L7lZ4EtDWdkiCrzB9IPsGPvmJQ2")
    .collection("analytics")
    .doc(day)
    .set({
      date: admin.firestore.Timestamp.fromDate(new Date(date)),
      followers: getRandomIntInclusive(0, 100),
      sales: getRandomIntInclusive(0, 200),
      views: getRandomIntInclusive(0, 1000),
      orders: getRandomIntInclusive(0, 10),
      products: {
        [products[
          Math.floor(Math.random() * products.length)
        ]]: getRandomIntInclusive(0, 100),
        [products[
          Math.floor(Math.random() * products.length)
        ]]: getRandomIntInclusive(0, 100),
        [products[
          Math.floor(Math.random() * products.length)
        ]]: getRandomIntInclusive(0, 100),
        [products[
          Math.floor(Math.random() * products.length)
        ]]: getRandomIntInclusive(0, 100)
      }
    });
});
