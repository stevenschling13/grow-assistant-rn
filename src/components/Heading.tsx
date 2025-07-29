import React from 'react';
import { Text, StyleSheet, TextProps } from 'react-native';
import { colours, fontSizes } from '../theme';

/**
 * Heading component used for titles on screens. It applies consistent font
 * size and colour from the design system. Additional TextProps can be
 * passed through.
 */
export default function Heading(props: TextProps) {
  return <Text style={[styles.heading, props.style]} {...props} />;
}

const styles = StyleSheet.create({
  heading: {
    fontSize: fontSizes.title,
    fontWeight: 'bold',
    color: colours.primary,
    marginBottom: 12,
  },
});
