import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { db } from '../support/firebase';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

export default function ProfileScreen() {
    return (
      <YStack flex={1} justifyContent='center' alignItems='center' > 
        <Text>PLANNER</Text>
        </YStack>  );
}