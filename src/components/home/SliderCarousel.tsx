import { Dimensions, FlatList, Image, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { pb } from '../../lib/pocketbase'
import { SliderProps } from '../../../types'

const baseUrl = 'https://skin-noon.pockethost.io/api/files/';
const { width: screenWidth } = Dimensions.get('window');


export default function SliderCarousel() {


    const [sliders, setSliders] = useState<SliderProps[]>([]);

    useEffect(() => {
        const fetchSliders = async () => {
            const records = await pb.collection('sliders').getFullList<SliderProps>({
                sort: '-created',
            });
            setSliders(records);
        };
        fetchSliders();
    }, []);


    const renderItem = ({ item }: { item: SliderProps }) => (
        <View className="mr-4">
            <Image
                source={{ uri: `${baseUrl}${item.collectionId}/${item.id}/${item.image}` }}
                className="w-full h-60 rounded-lg" style={{ width: screenWidth }}
            />
        </View>
    );
    return (
        <View className='mt-1'>
            <FlatList
                data={sliders}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                horizontal={true}
            />
        </View>
    );
}