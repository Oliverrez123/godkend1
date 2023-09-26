import React, { useState } from 'react';
import { Button, Text, View, TextInput, StyleSheet } from 'react-native';
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

function SignUpForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);

    const auth = getAuth();

    const renderButton = () => {
        return <Button onPress={() => handleSubmit()} title="Opret Bruger" />;
    };

    const handleSubmit = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            // Oprettelse af bruger var vellykket
        } catch (error) {
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage(errorMessage);
            // Fejl ved oprettelse af bruger
        }
    }

    return (
        <View>
            <Text style={styles.header}>Opret bruger</Text>
            <TextInput
                placeholder="email"
                value={email}
                onChangeText={(email) => setEmail(email)}
                style={styles.inputField}
            />
            <TextInput
                placeholder="password"
                value={password}
                onChangeText={(password) => setPassword(password)}
                secureTextEntry
                style={styles.inputField}
            />
            {errorMessage && (
                <Text style={styles.error}>Fejl: {errorMessage}</Text>
            )}
            {renderButton()}
        </View>
    );
}

const styles = StyleSheet.create({
    error: {
        color: 'red',
    },
    inputField: {
        borderWidth: 1,
        margin: 10,
        padding: 10,
        width: 300,
    },
    header: {
        fontSize: 40,
    },
});

export default SignUpForm;
