// Import the functions you need from the SDKs you need
// import * as firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCbpbA_Qbv8C9TuEhbsmjc0U4kyrn7Gn3A",
  authDomain: "test-9faa8.firebaseapp.com",
  projectId: "test-9faa8",
  storageBucket: "test-9faa8.appspot.com",
  messagingSenderId: "19872625079",
  appId: "1:19872625079:web:dbd5f5692571176adaf832",
  measurementId: "G-VVJPFH86R2"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

//added this myself
// const [isLoggedIn, setIsLoggedIn] = useState(false);

// firebase.auth().onAuthStateChanged((user) => {
//   if (user != null) {
//     setIsLoggedIn(true)
//   } else {
//     setIsLoggedIn(false);
//   }
// });

const auth = firebase.auth();

export { auth };