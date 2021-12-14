const functions = require("firebase-functions");
const stripe = require("stripe")("sk_test_szCb20Av4qLa9L5xY6NvZvEV");
const admin = require("firebase-admin");
const moment = require("moment");
const algoliasearch = require("algoliasearch");

var serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://local-guru-aeac9.firebaseio.com",
});

const ALGOLIA_INDEX_NAME = "products";
const client = algoliasearch(
  functions.config().algolia.app_id,
  functions.config().algolia.api_key
);

// Set up user with Stripe Customer ID upon creation
exports.onUserCreated = functions.firestore
  .document("/users/{userId}")
  .onCreate((snap, ctx) => {
    const { email, displayName, uid } = snap.data();

    return stripe.customers
      .create({
        email: email,
        name: displayName,
      })
      .then((customer) => {
        const { id } = customer;
        console.log(id);
        return admin.firestore().collection("users").doc(uid).update({
          customer_id: id,
        });
      })
      .catch((err) => console.error(err));
  });

exports.onSellerCreated = functions.firestore
  .document("/producers/{userId}")
  .onCreate((snap, ctx) => {
    const { email, displayName } = snap.data();
    const { userId } = ctx.params;

    return stripe.accounts
      .create({
        type: "custom",
        country: "US",
        email: email,
        business_type: "individual",
        requested_capabilities: ["card_payments", "transfers"],
      })
      .then((account) => {
        const { id } = account;
        return admin.firestore().collection("producers").doc(userId).update({
          stripe_account: id,
        });
      });
  });

// Update products on Algolia when created
exports.addProduct = functions.firestore
  .document("/products/{productID}")
  .onCreate((snap, ctx) => {
    const newData = snap.data();
    const object = {
      objectID: ctx.params.productID,
      ...newData,
    };

    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(object);
  });

// Update products on Algolia when onChange
exports.updateProducts = functions.firestore
  .document("/products/{productID}")
  .onUpdate((change, ctx) => {
    const newData = change.after.data();
    const object = {
      objectID: ctx.params.productID,
      ...newData,
    };

    const index = client.initIndex(ALGOLIA_INDEX_NAME);
    return index.saveObject(object);
  });

exports.updateRating = functions.firestore
  .document("/products/{product}/producers/{producer}/ratings/{review}")
  .onCreate((snap, ctx) => {
    const { rating } = snap.data();
    const { product, producer, review } = ctx.params;

    console.log("rating", rating);
    console.log("product", product);
    console.log("producer", producer);
    console.log("review", review);

    return admin
      .firestore()
      .doc(`/products/${product}/producers/${producer}`)
      .get()
      .then((snap) => {
        let ratingCount =
          typeof snap.data().ratingCount === "undefined"
            ? 0
            : snap.data().ratingCount;
        let ratingTotal =
          typeof snap.data().ratingTotal === "undefined"
            ? 0
            : snap.data().ratingTotal;

        return admin
          .firestore()
          .doc(`/products/${product}/producers/${producer}`)
          .set(
            {
              ratingCount: ratingCount + 1,
              ratingTotal: ratingTotal + rating,
            },
            { merge: true }
          );
      });
  });

// Add user's card
exports.addCard = functions.https.onCall((data, ctx) => {
  const { user, customer, token, card, name } = data;

  console.log("user", user);
  console.log("customer", customer);
  console.log("token", token);
  console.log("card", card);
  console.log("name", name);

  return stripe.customers
    .createSource(customer, {
      source: token,
    })
    .then((res) => {
      return {
        success: true,
        message: `Card added!`,
      };
    })
    .catch((err) => {
      return {
        success: false,
        message: `There was an error: ${err}`,
      };
    });
});

exports.addBankAccount = functions.https.onCall((data, ctx) => {
  const { user, token } = data;
  const { stripe_account, uid } = user;
  console.log(user);

  console.log("user", uid);
  console.log("account", stripe_account);
  console.log("token", token);

  return stripe.accounts
    .createExternalAccount(stripe_account, {
      external_account: token.card.id,
    })
    .then((res) => {
      console.log(res);
      console.log("received response from stripe");
      return admin.firestore().collection("producers").doc(uid).set(
        {
          payoutCard: res,
        },
        { merge: true }
      );
    })
    .then(() => {
      return {
        success: true,
        message: "Card added",
      };
    })
    .catch((err) => {
      return {
        success: false,
        message: `There was an error: ${err}`,
      };
    });
});

exports.addPayoutCard = functions.https.onCall((data, ctx) => {
  const { user, token } = data;
  const { stripe_account, uid } = user;
  console.log(user);

  console.log("user", uid);
  console.log("account", stripe_account);
  console.log("token", token);

  return stripe.accounts
    .createExternalAccount(stripe_account, {
      external_account: token,
    })
    .then((res) => {
      console.log(res);
      console.log("received response from stripe");
      return admin.firestore().collection("producers").doc(uid).set(
        {
          payoutCard: res,
        },
        { merge: true }
      );
    })
    .then(() => {
      return {
        success: true,
        message: "Card added",
      };
    })
    .catch((err) => {
      return {
        success: false,
        message: `There was an error: ${err}`,
      };
    });
});

exports.createInvoice = functions.firestore
  .document("/transactions/{transactionID}")
  .onCreate((snap, ctx) => {
    const { created_at, items, token, total, user } = snap.data();

    let amount = total * 100;
    let shipping = 999;
    let customer_id = "";

    if (amount > 4000) {
      shipping = 0;
    }

    return admin
      .firestore()
      .collection("users")
      .doc(user)
      .get()
      .then((doc) => {
        let { customer_id } = doc.data();

        return stripe.invoiceItems.create(
          {
            customer: customer_id,
            amount: Math.round(amount + shipping),
            currency: "usd",
            period: {
              start: Date.now(),
              end: moment().day(5).valueOf(),
            },
            description: "Week delivery",
          },
          (err, invoiceItem) => {
            console.log("invoice", invoiceItem);
            console.log(err);
          }
        );
      });
  });

exports.scheduledFunction = functions.pubsub
  .schedule("every 24 hours")
  .onRun((context) => {
    return admin
      .firestore()
      .collection("producers")
      .get()
      .then((docs) => {
        return docs.map((doc) => {
          const producerRef = firestore().collection("producers").doc(doc.id);

          return producerRef.add({
            followers: 0,
            sales: 0,
            views: 0,
            orders: 0,
            date: admin.firestore.FieldValue.serverTimestamp(),
          });
        });
      });
  });
