import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAvu9Qfb8RjHsC9blXb6aeOmijxXXsk9Vo",
    authDomain: "kyrgyz-riders.firebaseapp.com",
    projectId: "kyrgyz-riders",
    storageBucket: "kyrgyz-riders.appspot.com",
    messagingSenderId: "58102124633",
    appId: "1:58102124633:web:60ffa43796638099832148",
    measurementId: "G-FLW2F4XYH8"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);