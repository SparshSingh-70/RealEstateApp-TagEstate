// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ffcc4.firebaseapp.com",
  projectId: "mern-estate-ffcc4",
  storageBucket: "mern-estate-ffcc4.appspot.com",
  messagingSenderId: "521859410808",
  appId: "1:521859410808:web:1d816f7158ab37bb3ab68d",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
