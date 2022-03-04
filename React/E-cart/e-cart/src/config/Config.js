import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {

  apiKey: "AIzaSyCjGgnxHl801u4HlgPvLmNptOSz1qJxkjM",

  authDomain: "e-commerce-6bd9d.firebaseapp.com",

  projectId: "e-commerce-6bd9d",

  storageBucket: "e-commerce-6bd9d.appspot.com",

  messagingSenderId: "1992348411",

  appId: "1:1992348411:web:386605e5d27d579b4f565e"

};

  
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const db = firebase.firestore();
  const storage = firebase.storage();

  export {auth,db,storage}