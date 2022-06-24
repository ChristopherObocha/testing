import { useNavigation } from '@react-navigation/core'
import React, { useEffect, useState } from 'react'
import { KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, SafeAreaView, StatusBar} from 'react-native';
// import { Icon } from "@rneui/themed";
import { auth } from '../firebase';
import { firebase } from '../config/config';
// import { Icon } from 'react-native-vector-icons/Icon';
// import Ionicons from '@expo/vector-icons/Ionicons';

const Login = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    const db = firebase.firestore();

    auth
      .createUserWithEmailAndPassword(email, password)
        db.collection("data").doc(`${name}`).set({
          name: name,
          surname: surname,
          email: email,
        })
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
     
    .then(() => {
        console.log("Document successfully written!");
    })
    .catch((error) => {
        console.error("Error writing document: ", error);
    });
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  return (
    <SafeAreaView>
      <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
      >
        <View>
          <Image resizeMode='contain' style={styles.image} source={require("../assets/favicon.png")} />
        </View>
        <View>
          <Text style={styles.header}>Create an account</Text>
        </View>
          <View style={styles.inputContainer}>
            <TextInput
              placeholder='First Name'
              value={name}
              onChangeText={text => setName(text)}
              style={styles.input}
            />
            <TextInput
              placeholder='Last Name'
              value={surname}
              onChangeText={text => setSurname(text)}
              style={styles.input}
            />
            <TextInput
              placeholder='email'
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder='password'
              value={password}
              onChangeText={text => setPassword(text)}
              style={styles.input}
              secureTextEntry
            />
            <TextInput
              placeholder='Select your Trust of employment'
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
            <TextInput
              placeholder='Date of Arrival'
              value={email}
              onChangeText={text => setEmail(text)}
              style={styles.input}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity 
              onPress={handleSignUp}
              style={styles.btn}>
              <Text style={{ color: 'white', fontWeight: '700', fontSize: 16}}>Submit</Text>
            </TouchableOpacity>
          </View>
        {/* <View style={styles.inputContainer}>
          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            style={styles.input}
          />
          <TextInput
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            style={styles.input}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            onPress={handleLogin}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Logiin</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleSignUp}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Register</Text>
          </TouchableOpacity>
        </View> */}
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  header: {
    marginVertical: 31,
    fontSize: 19,
    fontWeight: '700',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
    height: 50,
  },
  buttonContainer: {
    width: '75%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  btn: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#0782F9',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonOutline: {
    backgroundColor: 'white',
    marginTop: 5,
    borderColor: '#0782F9',
    borderWidth: 2,
  },
  buttonText: {
    color: 'white',
    fontWeight: '700',
    fontSize: 16,
  },
  buttonOutlineText: {
    color: '#0782F9',
    fontWeight: '700',
    fontSize: 16,
  },
  image: {
    height: 84,
    width: 62,
    marginTop: StatusBar.currentHeight + 69,
  }
})