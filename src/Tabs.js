import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './stackss/HomeStackScreen';
import SettingsStackScreen from './stackss/SettingsStackScreen';
import { NavigationContainer } from '@react-navigation/native';


const Tabs = () => {
    const Tab = createBottomTabNavigator();

    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{headerShown: false}}>
                <Tab.Screen name='HomeMenu' component={HomeStackScreen} />
                <Tab.Screen name='SettingsMenu' component={SettingsStackScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

export default Tabs;