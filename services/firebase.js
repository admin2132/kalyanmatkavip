// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, onAuthStateChanged} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
import { Console } from "console";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAlFTh8-NAvYR1gj20NM2H9mjA-POBMhzs",
    authDomain: "kalyanmatka-9044f.firebaseapp.com",
    projectId: "kalyanmatka-9044f",
    storageBucket: "kalyanmatka-9044f.appspot.com",
    messagingSenderId: "853065689226",
    appId: "1:853065689226:web:b5d2107e066c8b1c376573",
    measurementId: "G-7GZSPMY8D5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const analytics = getAnalytics(app); 
const database = firebase.database();

onAuthStateChanged(auth, user => {
    if(user!=null){
        console.log('logged in!');
    }
    else{
        console.log('No user');
    }
})