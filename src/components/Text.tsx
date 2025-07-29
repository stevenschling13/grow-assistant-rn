import React from 'react';
import { Text as RNText, StyleSheet, TextProps } from 'react-native';
import { colours, fontSizes } from '../theme';

/**
 * A basic text component that uses the base typography defined in the design
 * system. Accepts all properties of React Native's Text component.
 */
export default function Text(props: TextProps & { variant?: keyof typeof fontSizes }) {
  const { variant = 'body', style, ...rest } = props;
  return <RNText style={[styles.base, { fontSize: fontSizes[variant] }, style]} {...rest} />;
}

const styles = StyleSheet.create({
  base: {
    color: colours.text,
  },
});
