import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBWqOiDuEpPRM7MTeLIcy6LgfldxAW8Tgs",
  authDomain: "vue-chat-app-4ef97.firebaseapp.com",
  projectId: "vue-chat-app-4ef97",
  storageBucket: "vue-chat-app-4ef97.appspot.com",
  messagingSenderId: "673392553661",
  appId: "1:673392553661:web:6f0524971b5af35c0bd1d4",
  measurementId: "G-RYE9DNHW0B"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
