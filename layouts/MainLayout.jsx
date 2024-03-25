// src/layouts/MainLayout.jsx
import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';
import Header from '../component/Header'; 
import Footer from '../component/Footer'; 

const MainLayout = ({ children, headerTitle }) => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={headerTitle} />
      <View style={styles.container}>{children}</View>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});

export default MainLayout;
