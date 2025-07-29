import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import DashboardScreen from '@screens/Dashboard';
import PlantsScreen from '@screens/Plants';
import PlantDetailScreen from '@screens/PlantDetail';
import CalendarScreen from '@screens/Calendar';
import FeedingScreen from '@screens/Feeding';
import EnvironmentScreen from '@screens/Environment';
import TasksScreen from '@screens/Tasks';
import DryCureScreen from '@screens/DryCure';

// Bottom tab navigation is used to switch between the main sections of the app.
const Tab = createBottomTabNavigator();

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Dashboard" component={DashboardScreen} />
        <Tab.Screen name="Plants" component={PlantsScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Feeding" component={FeedingScreen} />
        <Tab.Screen name="Environment" component={EnvironmentScreen} />
        <Tab.Screen name="Tasks" component={TasksScreen} />
        <Tab.Screen name="Dry & Cure" component={DryCureScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
