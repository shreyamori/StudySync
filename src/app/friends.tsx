import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Image } from 'react-native';

import { db } from '../support/firebase';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function friends() {
    const navigation = useNavigation();

    return (
      <XStack onPress={() => navigation.navigate("YourClasses")}>
        <Image source={require('../../assets/friends.png')} style={{marginLeft: -20}}/>
      </XStack>
         );
}