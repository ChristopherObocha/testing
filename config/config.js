import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCbpbA_Qbv8C9TuEhbsmjc0U4kyrn7Gn3A",
  authDomain: "test-9faa8.firebaseapp.com",
  projectId: "test-9faa8",
  storageBucket: "test-9faa8.appspot.com",
  messagingSenderId: "19872625079",
  appId: "1:19872625079:web:dbd5f5692571176adaf832",
  measurementId: "G-VVJPFH86R2"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase }