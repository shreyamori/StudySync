import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Fall2024 from './Fall2024';
import YourClasses from './YourClasses';
import MainClassesScreen from './MainClassesScreen';

const Stack = createNativeStackNavigator();

const ClassesScreen = () => {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="MainClassesScreen">
        <Stack.Screen name="MainClassesScreen" component={MainClassesScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Fall2024" component={Fall2024} />
        <Stack.Screen name="YourClasses" component={YourClasses} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default ClassesScreen;
