import { View, Text } from 'react-native'
import React from 'react'
import ProgressBar from '@/components/common/ProgressBar'
import TransactionCard from '../Transaction/TransactionCard'
import ColorPair from '@/utils/ColorPair'
import { Ionicons } from '@expo/vector-icons'
import { categoriesJSON } from '@/constants/Categories'

const CategoryBudgetCard = ({category, start, end}) => {
  // end = parseInt(end)
  return (
    <View className='m-3 bg-white rounded-xl shadow-lg'>
      <TransactionCard amount={start} secondaryText={`Remaining ${end - start}`} subCategory={categoriesJSON[category]}  category={category}/>
      <ProgressBar start={start} end={end} color={ColorPair[category]?.icon_color}/>
      {
        start>end &&
        <View className='flex-row items-center px-4 pb-4'>
          <Ionicons size={20} name='checkmark-circle' color={'red'} />
          <Text className='text-base'>You exceeding your budget</Text>
        </View>
      }
    </View>
  )
}

export default CategoryBudgetCard