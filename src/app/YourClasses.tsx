import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Appbar, Divider, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { XStack, YStack, Button } from 'tamagui';
import { ChevronRight, ChevronsRight, PlusCircle, SquareAsterisk } from "@tamagui/lucide-icons";
import {Avatar, NativeBaseProvider} from "native-base";
import { createAvatar } from '@dicebear/core';
import { icons } from '@dicebear/collection';
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import TabNavigator from '.';

const profile = createAvatar(icons, {
    scale: 50,
    radius: 50,
    size: 48,
    backgroundColor: ["b6e3f4","c0aede","d1d4f9","ffd5dc","ffdfbf"],
    backgroundType: ["solid"],
    translateX: 0,
    translateY: 0,
    randomizeIds: true,
    icon: ["alarm","archive","award","bag","bandaid","bank","basket","basket2","basket3","bell","bicycle","binoculars",
        "book","bookshelf","boombox","box","boxes","boxSeam","bricks","briefcase","brightnessHigh","brush","bucket","bug"]
  });

const data2 = [
    { id: '1', name: 'ENGR 1181', friends: '1' },
    { id: '2', name: 'MATH 1172', friends: '2' },
    { id: '3', name: 'PHYSICS 1250', friends: '5' },
    { id: '4', name: 'GENED 1200', friends: '3' }
];

const ClassItem = ({ title, friends }) => (
    <>
    <XStack flex={1} width="100%" padding={10} alignItems="center" justifyContent="space-between">
        <XStack alignItems="center">
            <SquareAsterisk justifyContent="center" size={80} />
            <YStack marginLeft={10}>
                <Text variant="titleLarge" style={{ marginBottom: 8 }}>{title}</Text>
                <XStack alignItems="center">
                    <Text variant='bodyLarge'>{friends} friends</Text>
                </XStack>
            </YStack>
        </XStack>
        <ChevronsRight justifyContent="flex-end" size={40}/>
    </XStack>
    <Divider/>
    </>
);

const YourClasses: React.FC = () => {
    const navigation = useNavigation();
    return (
        <>
            <Appbar.Header>
                <Appbar.BackAction onPress={() => navigation.navigate("MainClassesScreen")} />
                <Text variant='headlineLarge'>Your Classes</Text>
            </Appbar.Header>
            <YStack flex={1} margin={20} alignItems='flex-start'>
                <XStack space="$2" marginBottom={20}>
                    <Button onPress={() => navigation.navigate("MainClassesScreen")}><Text>Discover</Text></Button>
                    <Button themeInverse onPress={() => navigation.navigate("YourClasses")}>Your Classes</Button>
                    <Button onPress={() => {}}>Classmates</Button>
                </XStack>
                <FlatList
                    data={data2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ClassItem title={item.name} friends={item.friends} />}
                    ListFooterComponent={() => <PlusCircle justifyContent="center" alignSelf="center" size={40} marginTop={10} 
                                                    onPress={() => navigation.navigate('Fall2024')}/>}
                />
            </YStack>
        </>
    );
};

export default YourClasses;
