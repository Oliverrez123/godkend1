// Importér nødvendige moduler og komponenter fra React og React Native
import React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

// Definér Settings komponenten
export default function Settings() {
    return (
        <View style={styles.container}>
            {/* Vis en tekst med en besked */}
            <Text style={styles.title}>Gider du ikke kigge på tattoos mere?</Text>
            
            {/* Opret en "Log ud" knap med en specificeret onPress funktion */}
            <Button onPress={() => logout()} title="Log ud" style={styles.button} color="#FF6B6B" />
        </View>
    );
}

// Definér stilarter ved hjælp af StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F4EDED', 
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
        color: '#333', 
    },
    button: {
        width: 200,
        backgroundColor: '#FF6B6B',
    },
});
