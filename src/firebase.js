import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlotIbvlspHNJjnhhtvsk6w02Ry5fwLJI",
  authDomain: "to-do-list-9b8e8.firebaseapp.com",
  projectId: "to-do-list-9b8e8",
  storageBucket: "to-do-list-9b8e8.appspot.com",
  messagingSenderId: "448568539831",
  appId: "1:448568539831:web:f1e064b3ebfc8a6a746b32",
  measurementId: "G-6B1LNDFF2K"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
