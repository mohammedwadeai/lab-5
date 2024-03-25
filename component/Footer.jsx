// src/components/Footer.jsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Footer = () => {
  return (
    <View style={styles.footerContainer}>
      <Text style={styles.footerText}>Made by Mohammed</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: 50,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#f8f9fa',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
  },
  footerText: {
    color: 'blue', 
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Footer;
