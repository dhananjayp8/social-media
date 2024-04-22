// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyAj_09zI4XJx1GUGDxTyUtLedCzY4xeKGw",
  authDomain: "social-media-ae29b.firebaseapp.com",
  projectId: "social-media-ae29b",
  storageBucket: "social-media-ae29b.appspot.com",
  messagingSenderId: "121903988285",
  appId: "1:121903988285:web:50223258780015bf58b454",
  measurementId: "G-WPWN2N1G03",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
