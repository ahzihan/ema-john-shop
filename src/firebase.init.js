// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDeLMzqhwAH0j5G5vojmKbhMJWz2yeD_-s",
    authDomain: "ema-john-firebase-auth-63495.firebaseapp.com",
    projectId: "ema-john-firebase-auth-63495",
    storageBucket: "ema-john-firebase-auth-63495.appspot.com",
    messagingSenderId: "885794910855",
    appId: "1:885794910855:web:d3762b0029f5af62df3e22"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
const auth = getAuth( app );
export default auth;