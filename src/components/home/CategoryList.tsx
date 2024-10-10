import { Dimensions, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { pb } from '../../lib/pocketbase'
import { CategoryProps } from '../../../types'
import CategoryItem from './CategoryItem';

const IMAGE_BASE_URL = 'https://skin-noon.pockethost.io/api/files/';
const { width: screenWidth } = Dimensions.get('window');

export default function CategoryList() {

    const [categories, setCategories] = useState<CategoryProps[]>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            const records = await pb.collection('categories').getFullList<CategoryProps>({
                sort: '-created',
            });
            setCategories(records);
        };
        fetchCategories();
    }, []);


    return (
        <View className='bg-getirBgColor p-4'>
            <View className='flex flex-row flex-wrap w-full'>
                {categories.map((item) => (
                    <CategoryItem key={item.id} item={item} />
                ))}
            </View>
        </View>

    )
}
