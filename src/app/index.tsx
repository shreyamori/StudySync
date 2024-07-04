import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, XStack, YStack, Text } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import {CircleUserRound, Home, ListTodo, Notebook, Settings, Settings2} from '@tamagui/lucide-icons'

import { db } from '../support/firebase';
import React from 'react';
import HomeScreen from './HomeScreen';
import ClassesScreen from './ClassesScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import PlannerScreen from './PlannerScreen';

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
      <Tab.Navigator>
        <Tab.Screen name = "Planner" component={PlannerScreen} options={{tabBarIcon:() => (<ListTodo/>)}}/>
        <Tab.Screen name="Classes" component={ClassesScreen} options={{tabBarIcon:() => (<Notebook/>)}}/>
        <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon:() => (<Home/>)}}/>
        <Tab.Screen name="Profile" component={ProfileScreen} options={{tabBarIcon:() => (<CircleUserRound/>)}}/>
        <Tab.Screen name="Settings" component={SettingsScreen} options={{tabBarIcon:() => (<Settings/>)}}/>
      </Tab.Navigator>
  );
}
