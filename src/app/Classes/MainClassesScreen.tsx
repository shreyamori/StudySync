/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { collection, getDocs } from 'firebase/firestore/lite';
import { Avatar, Button, ScrollView, SizableText, Tabs, View, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { db } from '../../support/firebase';
import React from 'react';
import { Card, Title, Appbar,Text, IconButton, Icon } from 'react-native-paper';
import { AlignHorizontalJustifyEnd, AlignVerticalJustifyStart, ChevronRight, ChevronsRight, History, Plus, Star, StarFull } from '@tamagui/lucide-icons';
import YourClasses from './YourClasses';
import Fall2024 from './Fall2024';
import { RootStackParamList2 } from './ClassesScreen';

type MainClassesProp = StackNavigationProp<RootStackParamList2, 'MainClassesScreen'>;
const Tab = createMaterialBottomTabNavigator();

const MainClassesScreen: React.FC = () => {
    const navigation = useNavigation<MainClassesProp>();
    const {navigate} = useNavigation();

    return (
        <>
        <Appbar.Header style={{marginLeft:20}}>
            <Text variant='headlineLarge'>Discover</Text>        
            <Appbar.Action icon="magnify" style={{justifyContent:'flex-end'}}/>
        </Appbar.Header>
        <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start' > 
        <XStack space="$2" marginBottom={20}>
            <Button themeInverse onPress={() => navigation.navigate('MainClassesScreen')}>Discover</Button>
            <Button onPress={() => navigation.navigate('YourClasses')}>Your Classes</Button>
            <Button>Classmates</Button>
        </XStack>
        <XStack>
            <Text style={{marginBottom: 10}} variant='titleMedium'>All Semesters</Text>
        </XStack>
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, paddingBottom:200}}>        
            <XStack alignContent='flex-end' padding={2}>
            <Card style={{marginRight:20, width:200}} onPress={() => Fall2024}>
                <Card.Cover/>
                <Card.Title
                    title = "Fall 2024"
                    subtitle = "500 classes"/>
            </Card>
            <Card style={{marginRight:20, width:200}}>
                <Card.Cover></Card.Cover>
                <Card.Title
                    title = "Spring 2025"
                    subtitle = "600 classes"/>
            </Card>  
            <Card style={{marginRight:20, width:200}}>
                <Card.Cover></Card.Cover>
                <Card.Title
                    title = "Fall 2025"
                    subtitle = "600 classes"/>
            </Card>           
        </XStack> 
        </ScrollView>
        <XStack>
            <Text style={{marginTop:20, marginBottom:10}} variant='titleMedium'>Your Semesters</Text>
        </XStack>
        <ScrollView width={350}>
        <YStack>
        <XStack style={{marginBottom:20}}>
            <Card style={{width:160, marginRight:20, marginLeft:2, marginTop:2}} onPress={() => YourClasses}>
                <Card.Title title="Fall 2024" subtitle="5 classes"/>
                <Star marginLeft={15} marginBottom={10}/>
            </Card>
            <Card style={{width:160, marginTop:2}}>
                <Card.Title title="Spring 2025" subtitle="4 classes"/>
                <ChevronsRight marginLeft={15} marginBottom={10}/>
            </Card>
        </XStack>
        <XStack style={{marginBottom:20}}>
            <Card style={{width:160, marginRight:20, marginLeft:2, marginTop:2}}>
                <Card.Title title="Fall 2023" subtitle="6 classes"/>
                <History marginLeft={15} marginBottom={10}/>
            </Card>
            <Card style={{width:160}}>
                <Card.Title title="Spring 2024" subtitle="3 classes"/>
                <History marginLeft={15} marginBottom={10}/>
            </Card>
        </XStack>
        </YStack>
        </ScrollView>  
        </YStack>
        </>
    );
}

export default MainClassesScreen;