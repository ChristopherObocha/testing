import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const [isLoggedIn, setIsLoggedIn] = useState(false);

const firebaseConfig = {
  apiKey: "AIzaSyCbpbA_Qbv8C9TuEhbsmjc0U4kyrn7Gn3A",
  authDomain: "test-9faa8.firebaseapp.com",
  projectId: "test-9faa8",
  storageBucket: "test-9faa8.appspot.com",
  messagingSenderId: "19872625079",
  appId: "1:19872625079:web:dbd5f5692571176adaf832",
  measurementId: "G-VVJPFH86R2"
};

let app;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
else {
  app = firebase.app();
}

firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    setIsLoggedIn(true)
  } else {
    setIsLoggedIn(false);
  }
});

export { firebase }