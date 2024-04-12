
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import { initializeApp } from "firebase/app";
import * as firebase from "firebase";
import 'firebase/firestore';
import App from './App';
import img from './img/shopping-trolley-with-little-snooze_23-2147957113.avif';



const firebaseConfig = {
  apiKey: "AIzaSyCba9ELn5iKPWD_NgPtrMt2IOPmDIGYqCM",
  authDomain: "cart-c6967.firebaseapp.com",
  projectId: "cart-c6967",
  storageBucket: "cart-c6967.appspot.com",
  messagingSenderId: "6857718765",
  appId: "1:6857718765:web:093d6922144c34627405e4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <div style={{ backgroundImage:`url(${img})` ,marginRight:'100px'}}>
    <div style={{marginLeft:'100px'}}>
      <App />
    </div>
  </div>
  </React.StrictMode>
);

// ReactDOM.render(<App/>,document.getElementById('root'));
// const root = ReactDOM.createRoot(document.getElementById('root'));