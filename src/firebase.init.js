// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCIXdRe75YabgPSaAYHfdLNJmNXN9ZVelg",
  authDomain: "warehouse-management-9da9a.firebaseapp.com",
  projectId: "warehouse-management-9da9a",
  storageBucket: "warehouse-management-9da9a.appspot.com",
  messagingSenderId: "855765596231",
  appId: "1:855765596231:web:8f5b70b2a3b66a562f1962"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;