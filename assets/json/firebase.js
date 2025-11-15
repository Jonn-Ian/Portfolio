// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-analytics.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCT3IQAcHzsK9KEqP7-COUHSRDH82P6xpI",
  authDomain: "live-chart-counter.firebaseapp.com",
  projectId: "live-chart-counter",
  storageBucket: "live-chart-counter.firebasestorage.app",
  messagingSenderId: "123665232024",
  appId: "1:123665232024:web:050ed4ce56ba52d71020ed",
  measurementId: "G-51D88CBNXP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };