import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getDatabase} from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBLfPsvTjGjGRMQ98uBWFInmH3aOCpvTSc",
    authDomain: "react-chat-app-6fc20.firebaseapp.com",
    databaseURL: "https://react-chat-app-6fc20-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "react-chat-app-6fc20",
    storageBucket: "react-chat-app-6fc20.appspot.com",
    messagingSenderId: "78085157459",
    appId: "1:78085157459:web:1dbde313284b4fbdf90ca6"
  };
  

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const database = getDatabase(firebaseApp); 