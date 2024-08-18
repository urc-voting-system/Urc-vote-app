import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBpVnMNzPgAdoxX7oqqruX6hz21XyvNpYs",
  authDomain: "urcvoteapp.firebaseapp.com",
  projectId: "urcvoteapp",
  storageBucket: "urcvoteapp.appspot.com",
  messagingSenderId: "451656804339",
  appId: "1:451656804339:web:24da3a36b325a1d78c5486",
};


const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);

export default db;