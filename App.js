import React, {useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//Importerer Firebase Services
import { getApps, initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { Card } from 'react-native-paper';

//Importere vores componenter fra components mappe
import ProfileScreen from './components/ProfileScreen';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';




const firebaseConfig = {
  apiKey: "AIzaSyDpgo1gVEMy3nrorP5cn2hVH0JMISNc4L4",
  authDomain: "firebassen.firebaseapp.com",
  projectId: "firebassen",
  storageBucket: "firebassen.appspot.com",
  messagingSenderId: "223589075096",
  appId: "1:223589075096:web:122520f546eb964b72e8ed"
};

// Initialize Firebase

export default function App() {
  const [user, setUser] = useState({ loggedIn: false });

  if (getApps().length < 1) {
    initializeApp(firebaseConfig);

    console.log("Firebase On!");
    // Initialize other firebase products here
  } else {
    console.log("Firebase not on!");
  }
 
  const auth = getAuth();
//Primært taget fra øvelse
  function onAuthStateChange(callback) {
    return onAuthStateChanged(auth, (user) => {
      if (user) {
  
        const uid = user.uid;
        callback({loggedIn: true, user: user});
        console.log("You are logged in!");
      } else { 
        callback({loggedIn: false});
      }
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  //Laver forside
  const GuestPage = () => {
    return(
        <View style={styles.container}>
          <Text style={styles.paragraph}>
            Velkommen til Inkspiration
          </Text>
          <Text style={styles.paragraph}>
            Opret en ny bruger eller log ind med din eksisterende bruger! 
          </Text>
          
          <Card style={{padding:20, margin: 20}}>
            <SignUpForm />
          </Card>
          
          <Card style={{padding:20, margin: 20}}>
            <LoginForm />
          </Card>

        </View>
    )
  }




  return user.loggedIn ? <ProfileScreen /> : <GuestPage/> ;

}
//Laver stylesheet, tager fra øvelse
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
}); 
