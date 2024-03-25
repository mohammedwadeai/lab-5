// src/screens/AboutScreen.jsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import MainLayout from '../layouts/MainLayout'; // Ensure correct path

const AboutScreen = () => {
    const [easterEgg, setEasterEgg] = useState(false);

    const revealEasterEgg = () => {
        setEasterEgg(!easterEgg);
    };

    return (
        <MainLayout>
            <Text style={styles.title}>My To Do List App</Text>
            <Text style={styles.creator}>Created by: Mohammed</Text>
            <Text style={styles.date}>Date: {new Date().toLocaleDateString()}</Text>
            <TouchableOpacity style={styles.button} onPress={revealEasterEgg}>
                <Text style={styles.buttonText}>Press Here for a surprise!</Text>
            </TouchableOpacity>
            {easterEgg && <Text style={styles.surpriseText}>🎉 Surprise! 🎉</Text>}
        </MainLayout>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    creator: {
        fontSize: 18,
        marginBottom: 4,
    },
    date: {
        fontSize: 16,
        marginBottom: 20,
    },
    button: {
        backgroundColor: '#007bff', 
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 25,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        textAlign: 'center',
    },
    surpriseText: {
        marginTop: 20,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default AboutScreen;
