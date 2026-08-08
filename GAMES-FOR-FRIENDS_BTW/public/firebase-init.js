// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAzDuIAJOZCaW9cJA5dgme1zsZENb1qsSQ",
  authDomain: "games-for-friends-btw.firebaseapp.com",
  projectId: "games-for-friends-btw",
  storageBucket: "games-for-friends-btw.firebasestorage.app",
  messagingSenderId: "335419292811",
  appId: "1:335419292811:web:f3a0ecf86e7e575960688e",
  measurementId: "G-GT82P4NN7V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);