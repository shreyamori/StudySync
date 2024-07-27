import React from 'react';
import { TouchableOpacity, FlatList } from 'react-native';
import { Appbar, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from './AppNavigator';
import { XStack, YStack, Button } from 'tamagui';
import { ChevronRight, ChevronsRight, PlusCircle, SquareAsterisk } from "@tamagui/lucide-icons";
import {Avatar, NativeBaseProvider} from "native-base";
import { AvatarGenerator } from "random-avatar-generator";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

const generator = new AvatarGenerator();

const data2 = [
    { id: '1', name: 'ENGR 1181', friends: '1' },
    { id: '2', name: 'MATH 1172', friends: '2' },
    { id: '3', name: 'PHYSICS 1250', friends: '5' },
    { id: '4', name: 'GENED 1200', friends: '3' }
];

const ClassItem = ({ title, friends }) => (
    <XStack flex={1} width="100%" padding={10} alignItems="center" justifyContent="space-between">
        <XStack alignItems="center">
            <SquareAsterisk justifyContent="center" size={80} />
            <YStack marginLeft={10}>
                <Text variant="titleLarge" style={{ marginBottom: 10 }}>{title}</Text>
                <XStack alignItems="center">
                    <Text>{friends} friends</Text>
                </XStack>
            </YStack>
        </XStack>
        <ChevronsRight justifyContent="flex-end" size={40} />
    </XStack>
);

const YourClasses: React.FC = () => {
    const navigation = useNavigation();

    return (
        <>
            <Appbar.Header style={{ marginLeft: 20 }}>
                <Text variant='headlineLarge'>Your Classes</Text>
            </Appbar.Header>
            <YStack flex={1} margin={20} alignItems='flex-start'>
                <XStack space="$2" marginBottom={20}>
                    <Button
                        onPress={() => navigation.navigate("MainClassesScreen")}
                    >
                        <Text>Discover</Text>
                    </Button>
                    <Button
                        onPress={() => navigation.navigate("YourClasses")}
                    >
                        <Text>Your Classes</Text>
                    </Button>
                    <Button
                        onPress={() => {}}
                    >
                        <Text>Discover</Text>
                    </Button>
                </XStack>
                <FlatList
                    data={data2}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <ClassItem title={item.name} friends={item.friends} />}
                    ListFooterComponent={() => <PlusCircle justifyContent="center" alignSelf="center" size={40} marginTop={10} />}
                />
            </YStack>
        </>
    );
};

export default YourClasses;
