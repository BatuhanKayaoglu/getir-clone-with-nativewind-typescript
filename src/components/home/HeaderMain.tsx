import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

export default function HeaderMain() {
    return (
        <View className='flex h-12 flex-row bg-yellow-400 items-center justify-between'>
            <View className='w-10/12 h-12 flex items-center flex-row bg-white rounded-tr-full rounded-br-full p-4'>
                <Image source={require("../../../assets/house.png")} className='w-6 h-6' />
                <View className='flex-1 flex flex-row items-center ml-2 h-10'>
                    <Text className='text-xl font-bold'>EV</Text>
                    <Text className='text-sm font-light  ml-2'>Ayvalık Bulgari Maltepe İstanbul</Text>
                </View>
                <Entypo name="chevron-right" className='ml-auto' size={22} color="#5D3EBD" />
            </View>
            <View className='w-2/12'>
                <Text className='text-xs text-getirColor text-center font-bold'>TVS</Text>
                <Text className='text-xl text-getirColor text-center font-bold'>15dk</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({})