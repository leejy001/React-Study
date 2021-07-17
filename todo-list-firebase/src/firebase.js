import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
  apiKey: "apikey"
  authDomain: "authDomain"
  projectId: "projectId"
  storageBucket: "storageBucket"
  messagingSenderId: "messagingSenderId",
  appId: "appId",
  measurementId: "measurementId",
});

const db = firebaseApp.firestore();

export default db;
