import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { useNavigation } from '@react-navigation/native'
import React from "react";
import { Card, Title, Appbar,Text, IconButton, Icon } from 'react-native-paper';
import { Avatar, Button, ScrollView, SizableText, Tabs, View, XStack, YStack } from 'tamagui';

const Tab = createMaterialBottomTabNavigator();
// eslint-disable-next-line react-hooks/rules-of-hooks

const Fall2024: React.FC = () => {

    const navigation = useNavigation();

    return (
        <View>
            <Appbar.Header style={{marginLeft:20}}>
            <Text variant='headlineLarge'>Discover</Text>        
            <Appbar.Action icon="magnify" style={{justifyContent:'flex-end'}}/>
            </Appbar.Header>
            <YStack flex={1} margin={20} justifyContent='center' alignItems='flex-start' > 
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
        </YStack>
        </View>
    );
}

export default Fall2024;