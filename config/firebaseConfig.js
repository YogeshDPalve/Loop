// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ms--loop.firebaseapp.com",
  projectId: "ms--loop",
  storageBucket: "ms--loop.appspot.com",
  messagingSenderId: "1042160160870",
  appId: "1:1042160160870:web:afa018ac654c0725519da7",
  measurementId: "G-CXT597GBRH",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const analytics = getAnalytics(app);
