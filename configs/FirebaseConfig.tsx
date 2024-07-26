// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD73yqRNxOCNYzwq73LHt6UkG0mALvjrAg",
  authDomain: "business-directory-358a5.firebaseapp.com",
  projectId: "business-directory-358a5",
  storageBucket: "business-directory-358a5.appspot.com",
  messagingSenderId: "516555835441",
  appId: "1:516555835441:web:aa5a48b3c173d1c385ad10",
  measurementId: "G-QEKBDS21S8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
//const analytics = getAnalytics(app);
