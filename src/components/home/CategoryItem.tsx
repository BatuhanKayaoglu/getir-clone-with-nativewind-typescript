import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { CategoryProps } from '../../../types'

const baseUrl = 'https://skin-noon.pockethost.io/api/files/';
const { width: screenWidth } = Dimensions.get('window');

type CategoryItemProps = {
    item: CategoryProps
}

export default function CategoryItem({ item }: CategoryItemProps) {
    return (
        <TouchableOpacity style={{ width: screenWidth * 0.23, height: screenWidth * 0.23 }} className='flex flex-col items-center justify-between'>
            <Image source={{ uri: `${baseUrl}${item.collectionId}/${item.id}/${item.image}` }} style={{ width: screenWidth * 0.18, height: screenWidth * 0.18 }} />
            <Text className='text-xs mb-7'>{item.name}</Text>
        </TouchableOpacity>
    )
}