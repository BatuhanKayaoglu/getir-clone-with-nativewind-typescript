import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Entypo } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

interface StandartNavigatorProps {
    component: React.ComponentType<any>,
    name: string,
    logo?: boolean,
    textTitle?: string,
}

export default function StandartNavigator({ component, name, logo, textTitle }: StandartNavigatorProps) {

    const navigation = useNavigation();

    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator>
                <Stack.Screen name={name} component={component} options={{
                    headerStyle: { backgroundColor: '#5C3EBC', },
                    headerTitleAlign: 'center',
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => navigation.goBack()} className='m-2'>
                            <Entypo name="chevron-left" size={24} color="white" />
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View>
                            {logo ? <Image resizeMode='contain' className='w-16 h-8' source={require("../../../assets/logo.png")} /> : <Text className='text-white font-semibold text-lg'>{textTitle}</Text>}
                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity onPress={() => navigation.navigate('Home')} className='bg-white p-2 m-2 h-8 flex-row rounded-xl items-center justify-center' >
                            <Image source={require("../../../assets/cart.png")} className='w-5 h-7 p-2' />
                            <View className='flex flex-col bg-[#F3EFFE] h-7 items-center justify-center '>
                                <Text>
                                    {"\u20BA"} 555
                                </Text>
                            </View>
                        </TouchableOpacity>
                    ),
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}