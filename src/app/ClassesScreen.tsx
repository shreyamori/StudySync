import { collection, getDocs } from 'firebase/firestore/lite';
import { Avatar, Button, ScrollView, SizableText, Tabs, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';

import { db } from '../support/firebase';
import React from 'react';
import { Card, Title, Appbar,Text, IconButton, Icon } from 'react-native-paper';
import { AlignHorizontalJustifyEnd, AlignVerticalJustifyStart, ChevronRight, ChevronsRight, History, Plus, Star, StarFull } from '@tamagui/lucide-icons';

const Tab = createMaterialBottomTabNavigator();

export default function ClassesScreen() {
    return (
        <>
            <Appbar.Header style={{marginLeft:20}}>
            <Text variant='headlineLarge'>Discover</Text>        
            <Appbar.Action icon="magnify" style={{justifyContent:'flex-end'}}/>
        </Appbar.Header>
        <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start' > 
        <XStack space="$2" marginBottom={20}>
            <Button themeInverse>Discover</Button>
            <Button>Your Classes</Button>
            <Button>Classmates</Button>
        </XStack>
        <XStack>
            <Text style={{marginBottom: 10}} variant='titleMedium'>All Semesters</Text>
        </XStack>
        <ScrollView horizontal contentContainerStyle={{ flexGrow: 1, paddingBottom:200}}>        
            <XStack alignContent='flex-end' padding={2}>
            <Card style={{marginRight:20, width:200}}>
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
            <Card style={{width:160, marginRight:20, marginLeft:2, marginTop:2}}>
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