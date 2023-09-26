import React, { useState } from 'react';
import { Text, View, Button, TextInput, StyleSheet } from 'react-native';

export default function Home() {
    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        //Laver searchbar
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Velkommen til Inkspiration</Text>
            <Text style={styles.subtitle}>Her kan du søge efter tatoveringer</Text>
            <TextInput
                style={styles.searchInput}
                placeholder="Søg efter tatoveringer"
                onChangeText={(text) => setSearchText(text)}
                value={searchText}
            />
            <Button onPress={handleSearch} title="Søg!" style={styles.button} color="#FF6B6B" />
        </View>
    );
}

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
    subtitle: {
        fontSize: 18,
        marginBottom: 10, 
        textAlign: 'center',
        color: '#666',
    },
    searchInput: {
        width: '100%',
        height: 40,
        borderColor: '#333', 
        borderWidth: 1,
        borderRadius: 5,
        paddingLeft: 10,
        paddingRight: 10,
        marginBottom: 20, 
    },
    button: {
        width: 200,
        backgroundColor: '#FF6B6B',
    },
});
