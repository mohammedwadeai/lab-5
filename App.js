/**
 * My To Do List App
 *
 * @format
 */
"use client";
// App.js
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from 'react-native';

// Import your screen components
import HomeScreen from './screens/HomeScreen.jsx';
import AboutScreen from './screens/AboutScreen.js';

// Create a stack navigator
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={{ flex: 1 }}>
        <StatusBar style="auto" />
        <KeyboardAvoidingView
          style={{ flex: 1 }}
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="About" component={AboutScreen} />
          </Stack.Navigator>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
