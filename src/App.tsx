import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import AppNavigation from '@navigation/index';

/**
 * Root component for the Grow Assistant application. This component sets up
 * the overall layout and inserts the navigation container. The status bar
 * appearance is controlled here as well.
 */
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AppNavigation />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
