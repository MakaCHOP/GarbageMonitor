import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import {useEffect, useState} from "react";

const firebaseConfig = {
    apiKey: "AIzaSyBeABIEe5hkAqXXVRd4N0yyl__KnJhpUW0",
    authDomain: "phone-store-mamad.firebaseapp.com",
    projectId: "phone-store-mamad",
    storageBucket: "phone-store-mamad.appspot.com",
    messagingSenderId: "566692726682",
    appId: "1:566692726682:web:eeb3ec3d4c5320efb1dc23",
    measurementId: "G-LSRMQ5817Y"
};

// Initialize firebase and google providerfirebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: "select_account"});
// Sign in and sign out functins
const signIn = () => auth.signInWithPopup(provider);
const signOut = () => auth.signOut();

function Home({Component, pageProps}) {
    const [user, setUser] = useState(null);
    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            setUser(user);
        });
    }, []);
    return (<Component
            {...pageProps}
            user={user}
            signIn={signIn}
            signOut={signOut}
        />);
}

export default Home;