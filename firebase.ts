// Import the functions you need from the SDKs you need
import { getApp, getApps } from "firebase/app";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDh9FV1wTUp_dzeaJyHaxXtQ2-ug2CK2mU",
  authDomain: "mm-messenger-bb334.firebaseapp.com",
  projectId: "mm-messenger-bb334",
  storageBucket: "mm-messenger-bb334.appspot.com",
  messagingSenderId: "657759858246",
  appId: "1:657759858246:web:d8b6e97387a9d871622447"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db }