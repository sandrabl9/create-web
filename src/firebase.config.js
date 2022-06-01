// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZbMQGvadpQ4zsQVlx1_QUMwb-0EYbg_0",
  authDomain: "create-web-e8e99.firebaseapp.com",
  projectId: "create-web-e8e99",
  storageBucket: "create-web-e8e99.appspot.com",
  messagingSenderId: "619828931868",
  appId: "1:619828931868:web:4cf946d6fbb97563539ed9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);