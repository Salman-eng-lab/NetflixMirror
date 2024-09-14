// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe0YUfr_BV-aIRzgshyUlP4rux89dsaao",
  authDomain: "netflixmirror-4ff02.firebaseapp.com",
  projectId: "netflixmirror-4ff02",
  storageBucket: "netflixmirror-4ff02.appspot.com",
  messagingSenderId: "1084321583006",
  appId: "1:1084321583006:web:051363cd96d2e7b421d08f",
  measurementId: "G-ZRK8B5285S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
// firebase login
// firebase init
//firebase deploy