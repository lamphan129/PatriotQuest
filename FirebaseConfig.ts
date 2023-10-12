// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARul5bq0CwLr_uAbAz_3Yo2ihFZerijuc",
  authDomain: "patriotquest-4bc6e.firebaseapp.com",
  projectId: "patriotquest-4bc6e",
  storageBucket: "patriotquest-4bc6e.appspot.com",
  messagingSenderId: "642335219920",
  appId: "1:642335219920:web:2c822901d828fb62aefed5"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);