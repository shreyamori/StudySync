import React from 'react';
import { collection, getDocs } from 'firebase/firestore/lite';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';

import { db } from '../../support/firebase';

const Tab = createMaterialBottomTabNavigator();

export default function ClassesScreen() {
  return (
    <YStack flex={1} justifyContent="center" alignItems="center">
      <Text>CLASSES</Text>
    </YStack>
  );
}
