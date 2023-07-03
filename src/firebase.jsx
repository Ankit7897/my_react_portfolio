
import { getFirestore } from "firebase/firestore"


import { initializeApp } from "firebase/app";



const firebaseConfig = {
    apiKey: "AIzaSyBRWsOhsxQyG-ShMR0xb94duxdQF1geFJ0",
    authDomain: "ankit-portfolio-react.firebaseapp.com",
    projectId: "ankit-portfolio-react",
    storageBucket: "ankit-portfolio-react.appspot.com",
    messagingSenderId: "289294865422",
    appId: "1:289294865422:web:a7caa2d431c1d65a14585f"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore()