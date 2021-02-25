import * as firebase from "firebase";
require("@firebase/firestore");

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAX3i2MBRtBcvEp8zeXcSQkAGpjAPQMnKk",
  authDomain: "barter-projct.firebaseapp.com",
  databaseURL: "https://barter-projct.firebaseio.com",
  projectId: "barter-projct",
  storageBucket: "barter-projct.appspot.com",
  messagingSenderId: "797527555068",
  appId: "1:797527555068:web:c9986b50c3842582309079",
  measurementId: "G-TW9QSB2MW6"
};

 firebase.initializeApp(firebaseConfig);
 
 export default firebase.firestore();

 