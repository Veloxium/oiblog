// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE,
    authDomain: "oiblog-fd78e.firebaseapp.com",
    projectId: "oiblog-fd78e",
    storageBucket: "oiblog-fd78e.appspot.com",
    messagingSenderId: "738154685196",
    appId: "1:738154685196:web:8e35f0a2e413f0cf675f29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);