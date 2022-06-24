import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import Login from "./screens/Login";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUp";
import Onboarding from "./screens/Onboarding";

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import News from './screens/News';
// import { firebase } from './config/config';
// // import { auth } from '../firebase';

const Stack = createNativeStackNavigator();

function App() {

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

  return (
    <NavigationContainer>
      {isLoggedIn ? <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      </Stack.Navigator> :
        <Stack.Navigator>
          <Stack.Screen name="Onboarding" component={Onboarding} options={{ headerShown: false }} />
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Sign Up" component={SignUpScreen} options={{ headerShown: false }} />
        </Stack.Navigator>}
    </NavigationContainer>
  );
}

export default App;