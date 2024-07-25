/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Fall2024 from './Fall2024';
import YourClasses from './YourClasses';
import MainClassesScreen from './MainClassesScreen';
import App from '..';

export type RootStackParamList2 = {
  Home: undefined;
  MainClassesScreen: undefined;
  YourClasses: undefined;
  Fall2024: undefined;
}

const Stack = createStackNavigator<RootStackParamList2>();

const ClassesScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="MainClassesScreen">
        <Stack.Screen name="Home" component={App}/>
        <Stack.Screen name="MainClassesScreen" component={MainClassesScreen}/>
        <Stack.Screen name="Fall2024" component={Fall2024} />
        <Stack.Screen name="YourClasses" component={YourClasses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ClassesScreen;
