import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import RouteSwitch from "./RouteSwitch"
import { initializeApp } from "firebase/app"

const firebaseConfig = {
  apiKey: "AIzaSyD6-Ke8rKBvGqg0GAV9mr_zZ4DN6reqCRs",
  authDomain: "whereswaldo-4b709.firebaseapp.com",
  projectId: "whereswaldo-4b709",
  storageBucket: "whereswaldo-4b709.appspot.com",
  messagingSenderId: "1037156747702",
  appId: "1:1037156747702:web:6cc6bbfcea946010161917"
}

initializeApp(firebaseConfig)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouteSwitch />
  </React.StrictMode>
);

