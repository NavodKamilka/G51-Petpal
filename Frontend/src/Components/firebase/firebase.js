// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getStorage} from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD_x8xwXuOmiIySDuFxi5CtMvamMWKX1sI",
    authDomain: "petpal-5e409.firebaseapp.com",
    projectId: "petpal-5e409",
    storageBucket: "petpal-5e409.appspot.com",
    messagingSenderId: "364530431888",
    appId: "1:364530431888:web:51aee380cb2045fa786515",
    measurementId: "G-Q5GFDZ7TP3"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
