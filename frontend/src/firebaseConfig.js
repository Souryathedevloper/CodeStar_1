import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4FXkwdNnPy6H47ukNLYVCL0aW8RIn6EM",
  authDomain: "knock-nok-bedca.firebaseapp.com",
  projectId: "knock-nok-bedca",
  storageBucket: "knock-nok-bedca.firebasestorage.app",
  messagingSenderId: "1049105797485",
  appId: "1:1049105797485:web:42a620457dfa41814b4a64",
  measurementId: "G-NSXGJG5RY1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { auth, googleProvider };
