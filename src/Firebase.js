import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/functions";
import "firebase/analytics";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyCqI7KAjxmqY-SRw6xA9ICTb9w_rem-k9w",
  authDomain: "local-guru-aeac9.firebaseapp.com",
  databaseURL: "https://local-guru-aeac9.firebaseio.com",
  projectId:
    process.env.NODE_ENV === "production"
      ? "local-guru-aeac9"
      : "local-guru-development",
  storageBucket: "local-guru-aeac9.appspot.com",
  messagingSenderId: "337567241539",
  appId: "1:337567241539:web:0471950617695f8d",
  measurementId: "G-GN54XW6LVS",
};

firebase.initializeApp(config);
export const db = firebase.firestore();
if (window.location.hostname === "localhost") {
  db.settings({ host: "localhost:8080", ssl: false });
}
export const auth = firebase.auth();
export const functions = firebase.functions();
export const analytics = firebase.analytics();

export const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
  signInSuccessUrl: "/shop",
  // We will display Google and Facebook as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  ],
};
