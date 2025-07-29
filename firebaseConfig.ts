// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgvHeqkYwyq6QcISquqOWN_U9fOcgDf74",
  authDomain: "dulom-2de69.firebaseapp.com",
  databaseURL: "https://dulom-2de69-default-rtdb.firebaseio.com",
  projectId: "dulom-2de69",
  storageBucket: "dulom-2de69.firebasestorage.app",
  messagingSenderId: "373307675044",
  appId: "1:373307675044:web:1db55644addf3cf91c3131",
  measurementId: "G-LRBLVG0E89"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
