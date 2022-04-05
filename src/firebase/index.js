import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBLfPsvTjGjGRMQ98uBWFInmH3aOCpvTSc",
    authDomain: "react-chat-app-6fc20.firebaseapp.com",
    databaseURL: "https://react-chat-app-6fc20-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-chat-app-6fc20",
    storageBucket: "react-chat-app-6fc20.appspot.com",
    messagingSenderId: "78085157459",
    appId: "1:78085157459:web:1dbde313284b4fbdf90ca6"
  };
  
  firebase.initializeApp(firebaseConfig);

  export const auth = firebase.auth();
  export const db = firebase.database();
  