// firebase.js
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC6rEdyJrZlH1PEjNQE7IdWYvGd6K0XWT0",
  authDomain: "weathermonitoring-e1e15.firebaseapp.com",
  databaseURL: "https://weathermonitoring-e1e15-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "weathermonitoring-e1e15",
  storageBucket: "weathermonitoring-e1e15.firebasestorage.app",
  messagingSenderId: "20889202735",
  appId: "1:20889202735:web:4e75c0b55cf8c3febc56da",
  measurementId: "G-6F0R2ZE2B9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export { db };
