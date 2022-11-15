import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDJmSK1ATDK7QLaf6cIi6oQZ53jEdJ8muk",
  authDomain: "umbrella-chat-3a3e4.firebaseapp.com",
  projectId: "umbrella-chat-3a3e4",
  storageBucket: "umbrella-chat-3a3e4.appspot.com",
  messagingSenderId: "384697375040",
  appId: "1:384697375040:web:8f43c36fd06d9a1fdec2a5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const db = getFirestore(app)