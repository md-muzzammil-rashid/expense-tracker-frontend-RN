import { View, Text, Image } from 'react-native'
import React from 'react'
import { categoryIcons } from '@/constants/CategoriesIconsVector'
import { Calendar } from 'react-native-calendars'

const CategoryCard = ({category, selectedCategory}) => {
  
  return (
    <View className='w-[84] py-2 justify-center items-center'>
    <View className={`w-[75] h-[75] ${category==selectedCategory?"bg-[#16ACED]/80": "bg-gray-300/80"} rounded-full justify-center items-center`}>
      <Image className=' h-12 w-12' source={categoryIcons[category]} />
    </View>
    <Text className='text-center w-[84] py-1 text-xs'>{category}</Text>
    </View>
  )
}

export default CategoryCard