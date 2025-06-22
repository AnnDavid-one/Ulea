// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; 
import { getDatabase, Database} from "firebase/database";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgvHeqkYwyq6QcISquqOWN_U9fOcgDf74",
  authDomain: "dulom-2de69.firebaseapp.com",
  projectId: "dulom-2de69",
  storageBucket: "dulom-2de69.firebasestorage.app",
  messagingSenderId: "373307675044",
  appId: "1:373307675044:web:76b8479a979b066b1c3131",
  measurementId: "G-VELQF547QP"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const auth = getAuth(FIREBASE_APP);
// const analytics = getAnalytics(app);
const database: Database = getDatabase(FIREBASE_APP);
export{ database};