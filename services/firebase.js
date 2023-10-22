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
  apiKey: "AIzaSyC-Oh6DeFt43pBpj3q9WT84q5M39AfI6E0",
  authDomain: "kalyan-matka-user.firebaseapp.com",
  databaseURL: "https://kalyan-matka-user-default-rtdb.firebaseio.com",
  projectId: "kalyan-matka-user",
  storageBucket: "kalyan-matka-user.appspot.com",
  messagingSenderId: "548839805292",
  appId: "1:548839805292:web:72b844e70f4d9c57e8e349",
  measurementId: "G-EDNTZM7PWZ"
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