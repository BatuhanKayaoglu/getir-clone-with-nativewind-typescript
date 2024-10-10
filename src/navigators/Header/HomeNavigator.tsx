import { View, Text, Image } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../../screens/HomeScreen';

export default function HomeNavigator() {

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name="home" component={HomeScreen} options={{
                    headerStyle: { backgroundColor: '#5C3EBC', },
                    headerTitleAlign: 'center',
                    headerTitle: () => (
                        <View>
                            <Image resizeMode='contain' className='w-16 h-8' source={require("../../../assets/logo.png")} />
                        </View>
                    )
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}