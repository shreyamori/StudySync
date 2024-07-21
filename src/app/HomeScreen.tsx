import { collection, getDocs } from 'firebase/firestore/lite';
import { Button, SizableText, Tabs, Text, XStack, YStack } from 'tamagui';
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation';
import { NavigationContainer } from '@react-navigation/native';


import { db } from '../support/firebase';
import React from 'react';
import { router, useNavigation } from 'expo-router';

const Tab = createMaterialBottomTabNavigator();
const logoRed = '#EF6466'
const whiteGrey = '#EFEFEF'

export default function HomeScreen() {
    return (
        <YStack flex={1}> 
            <Text  style={{fontFamily: 'Arial Rounded MT bold', top: 80, left: 25}} fontSize={50}  color = "#EF6466" >
                Hi Student.
            </Text>
            <XStack
                style={{
                    top: 90,
                    left: 25,
                    width: 340,
                    height: 70,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10, 
                    borderRadius: 10
                }}
            >
            </XStack>
            <XStack
                style={{
                    top: 100,
                    left: 25,
                    width: 340,
                    height: 150,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10, 
                    borderRadius: 10
                }}
            >
                
                <YStack> 
                    <Text  style={{fontFamily: 'Arial Rounded MT bold'}} alignContent = "center" fontSize={14}  color = "#2F7B80" lineHeight={35}>
                        Another Day. Another Slay.
                    </Text>
                    <Text  style={{fontFamily: 'Arial Rounded MT bold'}} alignContent = "center" fontSize={14}  color = "#2F7B80" lineHeight={35}>
                        You Are Exactly Where You Need To Be. You Are Going To Be More Than Okay!
                    </Text>
                </YStack>
            </XStack>

            <Button
                onPress={() => router.navigate('Goals')}

                style={{
                    top: 120,
                    left: 25,
                    width: 340,
                    height: 50,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10, 
                    borderRadius: 45
                }}
            >
                <Text  style={{fontFamily: 'Arial Rounded MT bold'}} alignContent = "center" fontSize={20}  color = "#EF6466">
                    Goals
                </Text>

            </Button>
            <Button
                onPress={() => alert('WeeklyCalendar')}
                style={{
                    top: 140,
                    left: 25,
                    width: 340,
                    height: 50,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10, 
                    borderRadius: 45
                }}
            >
                <Text  style={{fontFamily: 'Arial Rounded MT bold'}} alignContent = "center" fontSize={20}  color = "#EF6466">
                    Weekly Calendar
                </Text>
            </Button>
            <Button
                onPress={() => alert('ToDoList')}
                style={{
                    top: 160,
                    left: 25,
                    width: 340,
                    height: 50,  // Adjust height as needed
                    backgroundColor: whiteGrey,
                    padding: 10, 
                    borderRadius: 45
                }}
            >
                <Text  style={{fontFamily: 'Arial Rounded MT bold'}} alignContent = "center" fontSize={20}  color = "#EF6466">
                    To-Do List
                </Text>
            </Button>


        </YStack>  );
}