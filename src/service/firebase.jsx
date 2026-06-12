// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

//apiKey: import.meta.env.VITE_API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyDdx7aBGJyE_8vQfBjFKmZsiDAk1-DpCJI",
  authDomain: "encajados-edf1c.firebaseapp.com",
  projectId: "encajados-edf1c",
  storageBucket: "encajados-edf1c.firebasestorage.app",
  messagingSenderId: "211624018800",
  appId: "1:211624018800:web:e5188654989f5a5c4a85b5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)