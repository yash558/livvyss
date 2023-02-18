// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore"


const firebaseConfig = {
    apiKey: "AIzaSyCAu20rvUmcHRonTr-rSha1XrSpOFGfysI",
    authDomain: "livvy-d08ae.firebaseapp.com",
    projectId: "livvy-d08ae",
    storageBucket: "livvy-d08ae.appspot.com",
    messagingSenderId: "686302108357",
    appId: "1:686302108357:web:018bc2c3b64edaf9d1aeac",
    measurementId: "G-W15N53HB7M",
    databaseURL: "https://users.firebaseio.com",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };
