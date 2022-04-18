import { initializeApp } from "firebase/app"
import { collection, doc, get, getDocs, getFirestore, query, where } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyD6-Ke8rKBvGqg0GAV9mr_zZ4DN6reqCRs",
  authDomain: "whereswaldo-4b709.firebaseapp.com",
  projectId: "whereswaldo-4b709",
  storageBucket: "whereswaldo-4b709.appspot.com",
  messagingSenderId: "1037156747702",
  appId: "1:1037156747702:web:6cc6bbfcea946010161917"
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)