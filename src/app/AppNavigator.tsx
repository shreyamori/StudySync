import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import ToDoList from './ToDoList';
import AddItem from './AddItem';
import WeeklyCalendar from './WeeklyCalendar';
import TabNavigator from './index'; // Import the TabNavigator

export type RootStackParamList = {
  Main: undefined;
  ToDoList: undefined;
  WeeklyCalendar: undefined;
  AddItem: { source: 'ToDoList' | 'WeeklyCalendar' };
};

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Main" component={TabNavigator} />
        <Stack.Screen name="ToDoList" component={ToDoList} />
        <Stack.Screen name="WeeklyCalendar" component={WeeklyCalendar} />
        <Stack.Screen name="AddItem" component={AddItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
