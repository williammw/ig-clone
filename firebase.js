// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getStorage} from 'firebase/storage'
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAx2uD45LehBKoWHBj0Os4A7a4VfEX6dBY",
  authDomain: "ig-clone-e209f.firebaseapp.com",
  projectId: "ig-clone-e209f",
  storageBucket: "ig-clone-e209f.appspot.com",
  messagingSenderId: "654349398364",
  appId: "1:654349398364:web:5a95f72510f4269cc35199",
  measurementId: "G-72ZY0SX8V9"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
// const analytics = getAnalytics(app);

export  {app, db, storage}