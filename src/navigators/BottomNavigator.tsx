import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HomeScreen from '../screens/HomeScreen'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GiftScreen from '../screens/GiftScreen';
import Entypo from '@expo/vector-icons/Entypo';
import { Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import CustomBarNavigation from './CustomBarNavigation';
import HomeNavigator from './Header/HomeNavigator';
import StandartNavigator from './Header/StandartNavigator';

export default function BottomNavigator() {

    const Tab = createBottomTabNavigator();

    return (
        <Tab.Navigator screenOptions={({
            route
        }) => ({
            headerShown: false,
            tabBarActiveTintColor: "#5D38BE",
            tabBarShowLabel: false,
            tabBarInactiveTintColor: "gray",
        })}>
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen name="Search"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={SearchScreen} name="Search" textTitle='Search' />}
            </Tab.Screen>

            <Tab.Screen name="Getir" component={SearchScreen}
                options={{
                    tabBarIcon: () => (
                        <CustomBarNavigation />
                    ),
                }}
            />
            <Tab.Screen name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={ProfileScreen} name="profile" textTitle='Profile' />}
            </Tab.Screen>

            <Tab.Screen name="Gifts"
                options={{
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="gift" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={GiftScreen} name="profile" logo />}
            </Tab.Screen>

        </Tab.Navigator>
    )
}

const styles = StyleSheet.create({})