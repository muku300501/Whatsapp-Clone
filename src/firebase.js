import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCByBpFKSW1_V56wOJdy1Njt76IG8zswhE",
  authDomain: "whatsapp-by-mukund-chamariya.firebaseapp.com",
  databaseURL: "https://whatsapp-by-mukund-chamariya.firebaseio.com",
  projectId: "whatsapp-by-mukund-chamariya",
  storageBucket: "whatsapp-by-mukund-chamariya.appspot.com",
  messagingSenderId: "415924886094",
  appId: "1:415924886094:web:26445619278e076d51011f",
  measurementId: "G-DCXY8ZKTQT",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
