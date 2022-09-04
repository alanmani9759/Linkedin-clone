import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export const firebaseConfig = {
    apiKey: "AIzaSyA5Oi7p5t8PMmiuq3GcI-x2ymzCEOwKOpM",
    authDomain: "linkedin-clone-f5d46.firebaseapp.com",
    databaseURL: "https://linkedin-clone-f5d46-default-rtdb.firebaseio.com",
    projectId: "linkedin-clone-f5d46",
    storageBucket: "linkedin-clone-f5d46.appspot.com",
    messagingSenderId: "327478474207",
    appId: "1:327478474207:web:8fad44105ba6358d99c06a",
    measurementId: "G-THWENKPWC2"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()

  const auth = firebase.auth()

  export const serverStamp = firebase.firestore.Timestamp

  export { db, auth }