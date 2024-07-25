import React from 'react';
import {
  CircleUserRound,
  Home,
  ListTodo,
  Notebook,
  Settings,
  Settings2,
} from '@tamagui/lucide-icons';
import { collection, getDocs } from 'firebase/firestore/lite';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Button, SizableText, Stack, Tabs, Text, XStack, YStack } from 'tamagui';
import { NavigationContainer } from '@react-navigation/native';


import { db } from '../support/firebase';
import ClassesScreen from './Classes/MainClassesScreen';
import HomeScreen from './HomeScreen';
import PlannerScreen from './PlannerScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import Fall2024 from './Classes/Fall2024';
import YourClasses from './Classes/YourClasses';
import MainClassesScreen from './Classes/MainClassesScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Planner"
        component={PlannerScreen}
        options={{ tabBarIcon: () => <ListTodo /> }}
      />
      <Tab.Screen
        name="Classes"
        component={MainClassesScreen}
        options={{ tabBarIcon: () => <Notebook /> }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{ tabBarIcon: () => <Home /> }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarIcon: () => <CircleUserRound /> }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ tabBarIcon: () => <Settings /> }}
      />
    </Tab.Navigator>
  );
}
