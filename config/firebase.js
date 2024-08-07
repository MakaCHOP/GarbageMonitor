import { getAuth } from 'firebase/auth';
import { initializeApp, getApps } from 'firebase/app';

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

const firebaseApp =
    getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

export const firebaseAuth = getAuth(firebaseApp);
