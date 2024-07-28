// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';
import TabNavigator from '.';

const App = () => {
  return (
    <NavigationContainer>
      <AppNavigator />
      <TabNavigator/>
    </NavigationContainer>
  );
};

export default App;
