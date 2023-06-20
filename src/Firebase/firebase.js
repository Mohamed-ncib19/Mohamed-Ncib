import { initializeApp } from "firebase/app";
import {getDatabase} from "firebase/database";
const firebaseConfig = {
  apiKey: "AIzaSyBBLa7MZHOEukQiW9S84W0WR4-MYM3sQfk",
  authDomain: "portfolio-27a8b.firebaseapp.com",
  databaseURL: "https://portfolio-27a8b-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "portfolio-27a8b",
  storageBucket: "portfolio-27a8b.appspot.com",
  messagingSenderId: "738064596607",
  appId: "1:738064596607:web:c17a3b5b8aa17c2d68094a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getDatabase(app);