// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATafCEASM1DwNeMRRZxKCa-A0gMtOWk4M",
  authDomain: "buy-busy-33e6f.firebaseapp.com",
  projectId: "buy-busy-33e6f",
  storageBucket: "buy-busy-33e6f.appspot.com",
  messagingSenderId: "1072125440882",
  appId: "1:1072125440882:web:e411a1e468fa9ae0a163eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);