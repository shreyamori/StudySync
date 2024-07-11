import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, XStack, YStack, Text } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { CircleUserRound, Home, Notebook, Settings } from '@tamagui/lucide-icons';
import { db } from '../support/firebase';
import React from 'react';
import HomeScreen from './HomeScreen';
import ClassesScreen from './ClassesScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';

const Tab = createMaterialBottomTabNavigator();
const tealBlue = '#2F7B80'
const darkTealSelection = '#133335'

export default function App() {
  return (
      
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor='white'
      inactiveColor='white'
      barStyle={{ backgroundColor: tealBlue }} // Set the background color to blue here
      activeIndicatorStyle={{ backgroundColor: darkTealSelection}}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => (<Home color={color} />) }} 
      />
      <Tab.Screen 
        name="Classes" 
        component={ClassesScreen} 
        options={{ tabBarIcon: ({ color }) => (<Notebook color={color} />) }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ tabBarIcon: ({ color }) => (<Settings color={color} />) }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => (<CircleUserRound color={color} />) }} 
      />
    </Tab.Navigator>
  );

}



