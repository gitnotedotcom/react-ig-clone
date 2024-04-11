// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoz6yC76sWl9SzknTezLOi4zFCg1QTrXo",
  authDomain: "reactjs-ig-clone-3698b.firebaseapp.com",
  projectId: "reactjs-ig-clone-3698b",
  storageBucket: "reactjs-ig-clone-3698b.appspot.com",
  messagingSenderId: "818468869774",
  appId: "1:818468869774:web:234be3dfcc15c422e19bdf",
  measurementId: "G-JGY6KYYED0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;