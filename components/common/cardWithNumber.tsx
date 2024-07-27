import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import InExAmt from './card/InExAmt'
import Icons from '@/constants/Icons'
import { gradients } from '@/constants/gradients'
import chip from '@/assets/icons/chip.png'

const CardWithoutNumber = ({color=2, wallet}) => {
    console.log(wallet);
    
    
  return (

    <LinearGradient
      colors={gradients[color%gradients.length]}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.8, y: 1.6 }}
      className='mx-6 my-2 rounded-2xl '
    >

      <View className=' h-52 item justify-around py-6 px-8  items-center'>
        <View className='w-full relative'>
          <Image source={Icons.mastercard} resizeMode='contain' className='w-12 h-12 absolute right-0 -top-4' />
          <Text className='text-white font-pblack text-2xl'>
            {wallet?.walletName} 
          </Text>
        </View>
        <View className='flex-row justify-between w-full pt-1 items-center'>
            <Image source={chip} className=' h-16 w-16'/>
          <Text className='text-white font-pblack text-2xl'>
            {wallet?.balance} INR
          </Text>
        </View>

        <View className='flex-row gap-5 '>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-2xl text-white font-psemibold'>{wallet?.code}</Text>
        </View>

        {/* <View className='flex-row justify-between w-full'>
          <InExAmt amount={'2245.00'} type={'Income'} />
          <InExAmt amount={'3150.00'} type={'Expense'} />
        </View> */}
      </View>
    </LinearGradient>
  )
}

export default CardWithoutNumber

