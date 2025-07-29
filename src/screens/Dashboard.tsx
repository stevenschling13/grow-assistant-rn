import React from 'react';
import Screen from '../components/Screen';
import Heading from '../components/Heading';
import Text from '../components/Text';

export default function Dashboard() {
  return (
    <Screen>
      <Heading>Dashboard</Heading>
      <Text>Welcome to your dashboard. Here you'll find an overview of your grow operation.</Text>
    </Screen>
  );
}
