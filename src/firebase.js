import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBMQpxLioom6j5yA1ti4BonZkLcPGXH0hk",
  authDomain: "challenge-518a5.firebaseapp.com",
  projectId: "challenge-518a5",
  storageBucket: "challenge-518a5.appspot.com",
  messagingSenderId: "116596002597",
  appId: "1:116596002597:web:3e597e0b788efc0b7954cc",
  measurementId: "G-GTJY7THP88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };