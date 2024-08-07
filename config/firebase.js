// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";
import {Auth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBeABIEe5hkAqXXVRd4N0yyl__KnJhpUW0",
    authDomain: "phone-store-mamad.firebaseapp.com",
    projectId: "phone-store-mamad",
    storageBucket: "phone-store-mamad.appspot.com",
    messagingSenderId: "566692726682",
    appId: "1:566692726682:web:eeb3ec3d4c5320efb1dc23",
    measurementId: "G-LSRMQ5817Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);

export const auth = Auth(app)
