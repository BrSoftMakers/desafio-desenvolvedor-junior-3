import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { FirebaseConfigDB } from "../../models/Firebase";

export const FirebaseConfigChave = () => {
  const firebaseConfig: FirebaseConfigDB = {
    apiKey: "AIzaSyCkh5TH2aFcr2cOfWrGfKkmC-BuECadUFU",
    authDomain: "rede-social-203d0.firebaseapp.com",
    projectId: "rede-social-203d0",
    storageBucket: "rede-social-203d0.appspot.com",
    messagingSenderId: "785267884088",
    appId: "1:785267884088:web:3f11d6255fae15ddf6e6cd"
  };
  const firebaseApp = initializeApp(firebaseConfig)
  return getFirestore(firebaseApp)
}