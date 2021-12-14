const functions = require("firebase-functions");
const admin = require("firebase-admin");
const faker = require("faker");

const serviceAccount = require("./serviceAccountKey.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://local-guru-aeac9.firebaseio.com"
});

const products = [
  "0sR0DpOMgj",
  "1",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1SUDausbbH",
  "2",
  "20",
  "21",
  "2l0WF9fnuQ",
  "3fAtdkMAGrqFEVce7ixK",
  "4",
  "48RfSaKy2NjQ3Ro7DVl6",
  "5",
  "59mQgEbMdb",
  "gRKmI9iDzV0a8QCypQsy",
  "gx5R8ujC81c092nWvUCy",
  "iHZoml7Jah89gEWc4Sy1",
  "iiLBSod6fB",
  "lAPRotiSp4kdU1lQsOx6",
  "mAo1aBqqrPqraTlGLhQU",
  "mTxiD4nDeu",
  "nUttyGDx4V",
  "nnmsopuvVZMVRtN9fmtg",
  "oD74xhTYGu",
  "p7zKa7hrCn",
  "qUBp809CDI0Tdm1EDVwW",
  "qkVPYl3Ox6WE9TZrIFRS",
  "qnVgSuSlmbDuTrsPl4Zs",
  "rjSYcPWI3Y",
  "svxDZvlyxpyfB5OovEim",
  "txHfOHjtnDsx9dknm5YY",
  "x6707L1BD6oiYBo7EARL",
  "xHWtbrN6dP",
  "y6SmcpG903qKFdJnuxmV",
  "zR3w20DAga",
  "zS6jwRpYywKuBoVi9Rjz"
];

// const products = [
//   "7",
//   "8",
//   "a1bm5Nybd1",
//   "9nFKAkdOr8",
//   "LMVhjMkys6",
//   "G4Kl3delQm",
//   "EHl0yA89zO",
//   "WcGSZmTOKB",
//   "fYzfa50Um4",
//   "Wn3a0oUVLO",
//   "902oITA1FYcd2CwqTQzv",
//   "bDXBZZ0seE",
//   "IoxM2hMCXT",
//   "V1T38RBlJr",
//   "aHfd5TyUwC",
//   "DwlWRLctQa",
//   "LHAmBVU1e6DZ6UPlguCN",
//   "f5nsjUjU8S",
//   "BaRerx5iAs5Fjp2iQcT3",
//   "9",
//   "Y8MdaDTQTB7yiCtyqYPR",
//   "OaN4kCW6xaXt2sSSZafW",
//   "JBUqbO83byuRFf8Y48QJ",
//   "SCdUUPR91ccZyPyomo3m",
//   "88BFPQs6AS",
//   "b8mI9HBjfTjFbgOkUC2k",
//   "9U9ieJh5v58rsghYVsi3"
// ];

return products.map(product => {
  return admin
    .firestore()
    .collection("products")
    .doc(product)
    .set(
      {
        seasons: ["spring", "summer", "fall", "winter"]
      },
      { merge: true }
    );
});
