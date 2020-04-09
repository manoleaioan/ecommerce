import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyCm--WvbBsHUaFYKHLOjmyUgI0UAFSim-E",
  authDomain: "ecommerce-db-55eb7.firebaseapp.com",
  databaseURL: "https://ecommerce-db-55eb7.firebaseio.com",
  projectId: "ecommerce-db-55eb7",
  storageBucket: "ecommerce-db-55eb7.appspot.com",
  messagingSenderId: "621345601647",
  appId: "1:621345601647:web:9c04c5284881cff15b759a",
  measurementId: "G-BJL8EF880V"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;