// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBAFni4aEeaAi4yJPN2yvFUwJ9seB6cL9g",
  authDomain: "rtk-q-voting-app.firebaseapp.com",
  projectId: "rtk-q-voting-app",
  storageBucket: "rtk-q-voting-app.appspot.com",
  messagingSenderId: "478043418839",
  appId: "1:478043418839:web:89f296d0754cf6172f4092",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const db = getFirestore(app)
export const auth = getAuth(app);