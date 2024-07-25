import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Card, Title, Appbar,Text, IconButton, Icon } from 'react-native-paper';
import { Button, ScrollView, SizableText, Square, Tabs, XStack, YStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native'
import { FlatList, ListRenderItem, View } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList2 } from "./ClassesScreen";
import { ChevronRight, ChevronsRight, PlusCircle, SquareAsterisk } from "@tamagui/lucide-icons";
import {Avatar, NativeBaseProvider} from "native-base";
import { AvatarGenerator } from "random-avatar-generator";
type YourClassesProp = StackNavigationProp<RootStackParamList2, 'YourClasses'>;

const Tab = createMaterialBottomTabNavigator();
const generator = new AvatarGenerator();

const data2 = [
    {id: '1', name: 'ENGR 1181', friends: '1'},
    {id: '2', name: 'MATH 1172', friends: '2'},
    {id: '3', name: 'PHYSICS 1250', friends: '5'},
    {id: '4', name: 'GENED 1200', friends: '3'}
];

const ClassItem = ({title, friends}) => (
    <XStack flex={1} width="100%" padding={10} alignItems="center" justifyContent="space-between">
    <XStack alignItems="center">
        <SquareAsterisk justifyContent="center" size={80}/>
    <YStack marginLeft={10}>                    
        <Text variant="titleLarge" style={{marginBottom: 10}}>{title}</Text>
        <XStack alignItems="center">
            <NativeBaseProvider >        
                <Avatar.Group _avatar={{ size: "sm" }} max={2} marginRight={2}>{Array.from({ length: friends }).map((_, i) => (
                    <Avatar key={i} source={{ uri: generator.generateRandomAvatar('avatar') }} />
                    ))}
                    </Avatar.Group>
            </NativeBaseProvider>  
<Text>{friends} friends</Text>
        </XStack>
    </YStack>
    </XStack>
    <ChevronsRight justifyContent="flex-end" size={40}/>
    </XStack>
);

const YourClasses: React.FC = () => {
    const navigation = useNavigation<YourClassesPropClassesProp>();
    const {navigate} = useNavigation();

    return (
        <>
            <Appbar.Header style={{marginLeft:20}}>
            <Text variant='headlineLarge'>Your Classes</Text>        
            </Appbar.Header>
            <YStack flex={1} margin={20} alignItems='flex-start'> 
        <XStack space="$2" marginBottom={20}>
            <Button onPress={() => navigation.navigate('MainClassesScreen')}>Discover</Button>
            <Button themeInverse onPress={() => navigation.navigate('YourClasses')}>Your Classes</Button>
            <Button>Classmates</Button>
        </XStack>
        <FlatList 
        data = {data2} 
        keyExtractor={(item) => item.id}
        renderItem={({item}) => <ClassItem title={item.name} friends={item.friends}/>}
        ListFooterComponent={() => <PlusCircle justifyContent="center" alignSelf="center" size={40} marginTop={10}/>
    }/>
        </YStack>
        </>    
        );
}

export default YourClasses;