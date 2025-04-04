import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Firestore for database
import { getStorage } from "firebase/storage"; // Firebase Storage
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

// Export authentication, Google provider, Firestore, and Storage
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app); // Fix missing Firestore export
export const storage = getStorage(app); // Fix missing Storage export