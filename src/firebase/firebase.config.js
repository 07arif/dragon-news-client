// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAq6iBC1bdpBwD-3BoNDFHWdjBOo1dUjJM",
  authDomain: "dragon-news-3560d.firebaseapp.com",
  projectId: "dragon-news-3560d",
  storageBucket: "dragon-news-3560d.appspot.com",
  messagingSenderId: "130639835735",
  appId: "1:130639835735:web:dd783c4e36b1bae0bfe912"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app