import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ToDoList from './ToDoList'; // Adjust the import as per your setup
import AddItems from './AddItem';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="ToDoList" component={ToDoList} />
                <Stack.Screen name="AddItems" component={AddItems} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;
