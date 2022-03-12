import firebase from "firebase/app";
import "firebase/auth";
import "firebase/storage";
import "firebase/firestore";



const firebaseConfig = {
    apiKey: "AIzaSyDy_yUlBkxoKM-CftTm4L-tKivaRwlzWZk",
    authDomain: "microproyecto2-peliculas.firebaseapp.com",
    projectId: "microproyecto2-peliculas",
    storageBucket: "microproyecto2-peliculas.appspot.com",
    messagingSenderId: "540683806135",
    appId: "1:540683806135:web:d4641ce6c273b6d731b432"
};
const app = firebase.initializeApp(firebaseConfig)

export const db = app.firestore()

export const auth = app.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();