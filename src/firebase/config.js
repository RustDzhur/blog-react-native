// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADvweApOi8zLaeEU7iHDvqkwKCgl8PSQw",
  authDomain: "blog-react-native-4c118.firebaseapp.com",
  projectId: "blog-react-native-4c118",
  storageBucket: "blog-react-native-4c118.appspot.com",
  messagingSenderId: "1031413706347",
  appId: "1:1031413706347:web:19ffff1c3d867164a80b2e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const authFirebase = getAuth(app);