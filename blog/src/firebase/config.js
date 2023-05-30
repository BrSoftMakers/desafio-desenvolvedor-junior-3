import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCb3xOLSEPXl41qwvEkNmqWvhUv6iYJSf0",
  authDomain: "blog-ef08b.firebaseapp.com",
  projectId: "blog-ef08b",
  storageBucket: "blog-ef08b.appspot.com",
  messagingSenderId: "587383944154",
  appId: "1:587383944154:web:4fc0b20c06514a1eb686e3"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };