// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-522a1.firebaseapp.com",
  projectId: "mern-auth-522a1",
  storageBucket: "mern-auth-522a1.appspot.com",
  messagingSenderId: "1077419438886",
  appId: "1:1077419438886:web:24cea5c86c6c54af63c7e7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);