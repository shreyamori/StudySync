import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import React from 'react';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SettingsScreen from './SettingsScreen';
import PlannerScreen from './PlannerScreen'; // Ensure PlannerScreen is imported correctly
import { CircleUserRound, Home, ListTodo, Notebook, Settings } from '@tamagui/lucide-icons';
import MainClassesScreen from './Classes/MainClassesScreen';

const Tab = createMaterialBottomTabNavigator();
const tealBlue = '#2F7B80';
const darkTealSelection = '#133335';

const TabNavigator = () => {
  return (
    <Tab.Navigator 
      initialRouteName="Home"
      activeColor='white'
      inactiveColor='white'
      barStyle={{ backgroundColor: tealBlue }} 
      activeIndicatorStyle={{ backgroundColor: darkTealSelection}}
    >
      <Tab.Screen 
        name="Planner" 
        component={PlannerScreen} 
        options={{ tabBarIcon: ({ color }) => (<ListTodo color={color} />) }} 
      />
      <Tab.Screen 
        name="Classes" 
        component={MainClassesScreen} 
        options={{ tabBarIcon: ({ color }) => (<Notebook color={color} />) }} 
      />
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{ tabBarIcon: ({ color }) => (<Home color={color} />) }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ tabBarIcon: ({ color }) => (<CircleUserRound color={color} />) }} 
      />
      <Tab.Screen 
        name="Settings" 
        component={SettingsScreen} 
        options={{ tabBarIcon: ({ color }) => (<Settings color={color} />) }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
