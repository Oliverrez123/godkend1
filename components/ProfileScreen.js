import React from 'react';
import {View, Text, Button, StyleSheet} from 'react-native';
import { initializeApp } from "firebase/app";




import { getAuth, signOut } from "firebase/auth";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './FirstUi';
import Settings from './SecondUI';

function ProfileScreen () {
    const auth = getAuth();
    const user = auth.currentUser
   
    
    //tjekker om bruger findes, hvis ikke, vises tekst
    if (!auth.currentUser) {
        return <View><Text>Not found</Text></View>;
    }

   
    const Tab = createBottomTabNavigator();
    return (
       
        <NavigationContainer>
        <Tab.Navigator>
        <Tab.Screen name="Forside" component={Home} />
        <Tab.Screen name="Profil" component={Settings} />
      </Tab.Navigator>
    </NavigationContainer>
    );

}

//Lokal styling til brug i ProfileScreen
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingTop: '5%',
        backgroundColor: '#ecf0f1',
        padding: 8,
    },
});

//Eksport af Loginform, således denne kan importeres og benyttes i andre komponenter
export default ProfileScreen 