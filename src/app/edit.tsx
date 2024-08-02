import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { Image } from 'react-native';

import { db } from '../support/firebase';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Tab = createMaterialBottomTabNavigator();

export default function edit() {
    const navigation = useNavigation();
    return (
      <XStack style={{backgroundColor: "#EF6466"}}>
        <Image source={require('../../assets/edit.png')} style={{marginLeft:1, top:20, width:400}}/>
      </XStack>
         );
}