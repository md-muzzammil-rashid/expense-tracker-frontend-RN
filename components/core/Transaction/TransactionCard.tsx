import { View, Text, Image } from 'react-native'
import React from 'react'
import {categoryIcons} from '@/constants/CategoriesIcons'
import ColorPair from '@/utils/ColorPair'
import {categoryIcons as coloredIcon} from '@/constants/CategoriesIconsVector'
import { categoriesJSON } from '@/constants/Categories'

const TransactionCard = ({type, amount, category, subCategory, secondaryText="", colorIcon=false}) => {
  const isCredit = type === 'credit' || type === 'Income'
  return (
    <View className='bg-white flex-row my-2 justify-between rounded-3xl p-4 overflow-hidden'>

    <View style={{backgroundColor:ColorPair[category]?.background_color}} className={`p-6  h-12 w-12 rounded-xl box-border ${'bg-'+ColorPair[category]?.background_color}] items-center justify-center `}>
      {/* image */}
      <Image source={colorIcon?coloredIcon[category]:categoryIcons[category]} tintColor={!colorIcon&& ColorPair[category]?.icon_color} className='max-w-[25px] max-h-[25px]' resizeMode='cover' />
    </View>

    <View className='justify-start  px-3 flex-grow flex-shrink overflow-hidden'>
      <Text className='text-primary  font-psemibold text-ellipsis whitespace-nowrap  text-xl'>{subCategory || categoriesJSON[category]}</Text>
      <Text className='text-secondary text-lg'>{secondaryText}</Text>
    </View>

    <View className='flex-shrink-0'>
      {
        amount &&
      <Text className={`${isCredit?"text-credit":"text-debit"} font-pbold text-lg`}>{isCredit?"+":"-"} &#8377; {amount} </Text>
    }
    </View>

    </View>
  )
}

export default TransactionCard