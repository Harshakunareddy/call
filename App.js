// App.js

import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { auth } from './firebase/firebase'; // Adjust the path based on your project structure
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'; // Import specific Firebase auth utilities

export default function App() {
  const signInWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider(); // Use GoogleAuthProvider from firebase/auth
      const result = await signInWithPopup(auth, provider); // Use signInWithPopup from firebase/auth
      console.log('Google sign-in successful:', result.user);
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Welcome</Text>
      <Button title="Continue with Google" onPress={signInWithGoogle} style={styles.button} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
  },
});
