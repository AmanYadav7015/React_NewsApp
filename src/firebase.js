// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup,connectAuthEmulator } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYr_RC2S-tmlTjFkRS2OOxgL7MZL8ps18",
  authDomain: "reactnewsapp-da620.firebaseapp.com",
  projectId: "reactnewsapp-da620",
  storageBucket: "reactnewsapp-da620.firebasestorage.app",
  messagingSenderId: "717989429178",
  appId: "1:717989429178:web:7c2f0ec2311032f12f6783",
  measurementId: "G-LSTQMXB5E9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,signInWithPopup,provider}