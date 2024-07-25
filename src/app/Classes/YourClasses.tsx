import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import React from "react";
import { Card, Title, Appbar,Text, IconButton, Icon } from 'react-native-paper';
import { Avatar, Button, ScrollView, SizableText, Tabs, XStack, YStack } from 'tamagui';
import { useNavigation } from '@react-navigation/native'
type YourClassesProp = StackNavigationProp<RootStackParamList2, 'YourClasses'>;

const Tab = createMaterialBottomTabNavigator();

const YourClasses: React.FC = () => {
    const navigation = useNavigation<YourClassesPropClassesProp>();
    const {navigate} = useNavigation();

    return (
        <>
            <Appbar.Header style={{marginLeft:20}}>
            <Text variant='headlineLarge'>Discover</Text>        
            <Appbar.Action icon="magnify" style={{justifyContent:'flex-end'}}/>
            </Appbar.Header>
            <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start' > 
        <XStack space="$2" marginBottom={20}>
            <Button onPress={() => navigation.navigate('MainClassesScreen')}>Discover</Button>
            <Button themeInverse onPress={() => navigation.navigate('YourClasses')}>Your Classes</Button>
            <Button>Classmates</Button>
        </XStack>
        </YStack>
        </>    
        );
}

export default YourClasses;