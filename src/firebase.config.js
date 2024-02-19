// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCosAFPp0ujPEo3V6RNWirK4qiSkScwt0k",
  authDomain: "hunt-your-vacancy-60250.firebaseapp.com",
  projectId: "hunt-your-vacancy-60250",
  storageBucket: "hunt-your-vacancy-60250.appspot.com",
  messagingSenderId: "889976535782",
  appId: "1:889976535782:web:6a30d3a569f7b188119927"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};