// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
import {getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4dkckkmPTze2yF79tztWQHodmn3lRBP8",
  authDomain: "react-cursov2.firebaseapp.com",
  projectId: "react-cursov2",
  storageBucket: "react-cursov2.appspot.com",
  messagingSenderId: "404735591245",
  appId: "1:404735591245:web:4788c111309454bcbbed04"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);
//config base de datos
export const FirebaseDB = getFirestore(FirebaseApp);
