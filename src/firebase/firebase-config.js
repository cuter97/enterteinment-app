// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKj9V5wDHuelY5pLwrGU9R5fvkmW-rAtI",
  authDomain: "enterteinment-app.firebaseapp.com",
  projectId: "enterteinment-app",
  storageBucket: "enterteinment-app.appspot.com",
  messagingSenderId: "667858090138",
  appId: "1:667858090138:web:b7daac0c27aa0849664723"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };