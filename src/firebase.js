import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCB5vrLPaBQY5rpHoJXGmVchBM55bEoUHQ",
  authDomain: "robinhood-clone-d5e1a.firebaseapp.com",
  projectId: "robinhood-clone-d5e1a",
  storageBucket: "robinhood-clone-d5e1a.appspot.com",
  messagingSenderId: "255789352893",
  appId: "1:255789352893:web:6fdd1bcefc21f5b729b4d4",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export { db };
