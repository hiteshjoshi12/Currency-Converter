// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNtPuX4kaqRwhcITba7wTSLrMksIOuwQc",
  authDomain: "currency-converter-64b51.firebaseapp.com",
  projectId: "currency-converter-64b51",
  storageBucket: "currency-converter-64b51.appspot.com",
  messagingSenderId: "725978005482",
  appId: "1:725978005482:web:b122b45000d8d68bc6bc93",
  measurementId: "G-2NTX37XJHE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);