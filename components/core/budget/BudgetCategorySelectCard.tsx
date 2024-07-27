import { View, Text, Image } from 'react-native'
import React from 'react'
import { categoryIcons } from '@/constants/CategoriesIconsVector'
import { categoriesJSON } from '@/constants/Categories'

const BudgetCategorySelectCard = ({category}) => {
  return (
    <>
    <Image className='h-7 w-7' source={categoryIcons[category]} />
    <View>
        <Text className='text-sm font-psemibold'>{categoriesJSON[category]}</Text>
    </View>
    </>
  )
}

export default BudgetCategorySelectCard