import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from '@react-navigation/native'
import React, { useEffect, useState } from "react";
import { Card, Title, Appbar,Text, IconButton, Icon, Divider } from 'react-native-paper';
import { Avatar, Button, ScrollView, SizableText, Tabs, View, XStack, YStack } from 'tamagui';
import TabNavigator from ".";
import { SquareAsterisk, ChevronsRight, PlusCircle, AlignVerticalJustifyEnd, Plus } from "@tamagui/lucide-icons";
import { FlatList } from "react-native";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

const Tab = createMaterialBottomTabNavigator();

const allClasses = [            
    {id: '1', name: 'MATH 1151', friends: '0'},
    {id: '2', name: 'MATH 1172', friends: '7'},
    {id: '3', name: 'MATH 2173', friends: '3'},
    {id: '4', name: 'MATH 2174', friends: '2'},
    {id: '5', name: 'MATH 2568', friends: '4'},
    {id: '1', name: 'ENGR 1181', friends: '3'},
    {id: '2', name: 'ENGR 1182', friends: '5'},
    {id: '3', name: 'ENGR 1221', friends: '1'},
    {id: '4', name: 'ENGR 1281', friends: '2'},
    {id: '5', name: 'ENGR 1282', friends: '4'},
    {id: '1', name: 'PHYSICS 1200', friends: '1'},
    {id: '2', name: 'PHYSICS 1201', friends: '2'},
    {id: '3', name: 'PHYSICS 1250', friends: '3'},
    {id: '4', name: 'PHYSICS 1251', friends: '2'},
    {id: '1', name: 'ENGLISH 1110', friends: '2'},
    {id: '2', name: 'ENGLISH 3011', friends: '3'}]

const data2 = [ {subject: "ALL", courses: allClasses},
    { subject: "MATH", 
        courses: [
            {id: '1', name: 'MATH 1151', friends: '0'},
            {id: '2', name: 'MATH 1172', friends: '7'},
            {id: '3', name: 'MATH 2173', friends: '3'},
            {id: '4', name: 'MATH 2174', friends: '2'},
            {id: '5', name: 'MATH 2568', friends: '4'}
        ]
    },
    { subject: "ENGR", 
        courses: [
            {id: '1', name: 'ENGR 1181', friends: '3'},
            {id: '2', name: 'ENGR 1182', friends: '5'},
            {id: '3', name: 'ENGR 1221', friends: '1'},
            {id: '4', name: 'ENGR 1281', friends: '2'},
            {id: '5', name: 'ENGR 1282', friends: '4'}
        ]
    },
    { subject: "PHYSICS", 
        courses: [
            {id: '1', name: 'PHYSICS 1200', friends: '1'},
            {id: '2', name: 'PHYSICS 1201', friends: '2'},
            {id: '3', name: 'PHYSICS 1250', friends: '3'},
            {id: '4', name: 'PHYSICS 1251', friends: '2'}
        ]
    },
    { subject: "ENGLISH", 
        courses: [
            {id: '1', name: 'ENGLISH 1110', friends: '2'},
            {id: '2', name: 'ENGLISH 3011', friends: '3'}
        ]
    },
];

const ClassItem = ({ title, friends }) => (
    <>
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
        <Plus justifyContent="flex-end" size={35}/>
    </XStack>
    <Divider/>
    </>
);

const Fall2024: React.FC = () => {
    const navigation = useNavigation();
    const [subjectChoice, setSubjectChoice] = useState("ALL");
    const [subjectData, setSubjectData] = useState(allClasses);
        
        // Function to update subject data based on the selected subject
        const changeSubject = (subject) => {
            const tempData = data2.find(item => item.subject === subject);
                setSubjectData(tempData.courses);
        
        };

    return (
        <>
            <Appbar.Header >
            <Appbar.BackAction onPress={() => navigation.navigate("MainClassesScreen")}/>
            <Text variant='headlineLarge' style={{marginRight: 140}}>Fall 2024</Text>        
            <Appbar.Action icon="magnify" theme={{}}/>
            </Appbar.Header>
            <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start'> 
                <ScrollView horizontal>        
                    <XStack space="$2" marginBottom={15} height={50}>
                        {data2.map(category => {
                            return (
                                <Button key={category.subject} themeInverse={subjectChoice === category.subject} 
                                    onPress={() => {setSubjectChoice(category.subject)}}>{category.subject}</Button>
                            )
                        })}
                    </XStack>
                </ScrollView>
                <FlatList
                data={subjectData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <ClassItem title={item.name} friends={item.friends} />}
                ListFooterComponent={() => <PlusCircle justifyContent="center" alignSelf="center" size={40} marginTop={10} />}
                />
            </YStack>
        </>
    );
}

export default Fall2024;
