import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { NavigationContainer, useNavigation } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CartScreen from '../../screens/CartScreen';
import { AntDesign } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function CartNavigator() {

    const navigation = useNavigation()
    return (
        <Stack.Navigator>
            <Stack.Screen name="CartDetail" component={CartScreen} options={{
                headerStyle: { backgroundColor: '#5C3EBC', },
                headerTitleAlign: 'center',
                headerLeft: () => (
                    <TouchableOpacity onPress={() => navigation.goBack()} className='m-2'>
                        {/* <AntDesign name="close" size={24} color="white" /> */}
                    </TouchableOpacity>
                ),
                headerTitle: () => (
                    <View>
                        <Text className='text-white font-semibold text-lg'>Sepetim</Text>
                    </View>
                ),
                headerRight: () => (
                    <TouchableOpacity className=' p-2 m-2  items-center justify-center' >
                        <AntDesign name="delete" size={24} color="white" />
                    </TouchableOpacity>
                ),
            }} />
        </Stack.Navigator>
    )
}