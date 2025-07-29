import React from 'react';
import { View, StyleSheet } from 'react-native';

/**
 * A basic layout component that provides padding and background colour for all
 * screens. Use this component to wrap the content of your screens for a
 * consistent look and feel across the application.
 */
interface ScreenProps {
  children: React.ReactNode;
}

export default function Screen({ children }: ScreenProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fafafa',
  },
});
