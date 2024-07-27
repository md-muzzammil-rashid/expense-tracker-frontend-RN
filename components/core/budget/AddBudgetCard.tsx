import { View, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../common/CustomInput'
import { Ionicons } from '@expo/vector-icons'
import { Image } from 'react-native'
import { categoryIcons } from '@/constants/CategoriesIconsVector'
import { categoriesJSON } from '@/constants/Categories'

const AddBudgetCard = ({category, removeHandler, setSelectedCategories, selectedCategories}) => {
    const handleChange = (e)=>{
        setSelectedCategories(prev=>
            prev?.map(cat=>
                cat.category== category?.category? {...cat, amount:e}:cat
            ))
    }
    return (
        <View className='m-2 bg-white px-4 py-4 shadow-md rounded-2xl'>
            <View className='flex-row justify-between'>
                <View className='flex-row  bg-white gap-1'>
                    <Image className='h-5 w-5' source={categoryIcons[category?.category]} />
                    <Text className='text-base font-psemibold'>{categoriesJSON[category?.category]}</Text>
                </View>
                <Ionicons onPress={() => removeHandler(category?.category)} size={18} name='close' />
            </View>
            <View>
                <CustomInput isNum value={category?.amount} handleChange={handleChange} placeholder={`Amount`} />
            </View>
        </View>
    )
}

export default AddBudgetCard