import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDlOn_IwrO-kvp66eUDvUNUbj9DEtBdkdY",
  authDomain: "danial-akbar-portfolio.firebaseapp.com",
  projectId: "danial-akbar-portfolio",
  storageBucket: "danial-akbar-portfolio.firebasestorage.app",
  messagingSenderId: "132967518433",
  appId: "1:132967518433:web:b0c5ecd7a7da1efa43a7a0"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
