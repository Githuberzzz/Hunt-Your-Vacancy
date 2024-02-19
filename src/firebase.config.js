// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjtHt0ZlXGN86VI0tgfBg_krki_yDJNRs",
  authDomain: "hunt-your-vacancy.firebaseapp.com",
  projectId: "hunt-your-vacancy",
  storageBucket: "hunt-your-vacancy.appspot.com",
  messagingSenderId: "796683521491",
  appId: "1:796683521491:web:ca96fe0da2b76b93c4b326"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};