import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBI7ot-bQUTSlcB-bJr-x3tkADg8hVFYfw",
  authDomain: "todolist-eeddd.firebaseapp.com",
  projectId: "todolist-eeddd",
  storageBucket: "todolist-eeddd.appspot.com",
  messagingSenderId: "486438045743",
  appId: "1:486438045743:web:c1c2371b51ec8e5df95eda",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
