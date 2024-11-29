// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "auth-merns.firebaseapp.com",
  projectId: "auth-merns",
  storageBucket: "auth-merns.firebasestorage.app",
  messagingSenderId: "629438319942",
  appId: "1:629438319942:web:02109d7ee84bdad708e947"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);