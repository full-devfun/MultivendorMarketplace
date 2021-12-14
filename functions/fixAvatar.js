const functions = require("firebase-functions");
const admin = require("firebase-admin");
const faker = require("faker");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://local-guru-aeac9.firebaseio.com",
});

const producer = "4e651847-457e-4543-beaa-d669f79a9767";
const photo = faker.image.avatar();

const fetchandFix = async (uid) => {
  const { docs } = await admin
    .firestore()
    .collectionGroup("producers")
    .where("uid", "==", uid)
    .get();

  return docs.map((doc) => {
    try {
      const { product } = doc.data();
      return admin
        .firestore()
        .collection("products")
        .doc(product)
        .collection("producers")
        .doc(uid)
        .set(
          {
            photo: photo,
          },
          { merge: true }
        );
    } catch (err) {
      return console.log(err);
    }
  });
};

return fetchandFix(producer);
