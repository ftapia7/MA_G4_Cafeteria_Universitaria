import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC0PzFdo5PuSSd-Wh-PkmSvv-_dnfpwo3o",
  authDomain: "cafeteria-2747c.firebaseapp.com",
  projectId: "cafeteria-2747c",
  storageBucket: "cafeteria-2747c.firebasestorage.app",
  messagingSenderId: "677007973500",
  appId: "1:677007973500:web:ba28bebc5062441aaa7df9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
