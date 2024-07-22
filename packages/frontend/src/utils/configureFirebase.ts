import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDf3S_GdNtDluoemF-iMCgvjJ-q7_q6KI",
  authDomain: "location-tips-409908.firebaseapp.com",
  projectId: "location-tips-409908",
  storageBucket: "location-tips-409908.appspot.com",
  messagingSenderId: "1038437023281",
  appId: "1:1038437023281:web:f0ace0d1267165f1279f10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;