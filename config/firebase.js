// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyBeABIEe5hkAqXXVRd4N0yyl__KnJhpUW0",
    authDomain: "phone-store-mamad.firebaseapp.com",
    projectId: "phone-store-mamad",
    storageBucket: "phone-store-mamad.appspot.com",
    messagingSenderId: "566692726682",
    appId: "1:566692726682:web:eeb3ec3d4c5320efb1dc23",
    measurementId: "G-LSRMQ5817Y"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });


export const analytics = getAnalytics(app);


