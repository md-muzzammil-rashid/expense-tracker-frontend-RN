import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from '@expo/vector-icons'
import InExAmt from './card/InExAmt'
import Icons from '@/constants/Icons'
import CustomGradient1 from '@/utils/Gradients/CustomGradient1'
import { gradients } from '@/constants/gradients'

const Card = ({color=2}) => {
  return (

    <LinearGradient
      colors={gradients[color%gradients.length]}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.8, y: 1.6 }}
      className='mx-6 my-2 rounded-2xl '
    >

      <View className=' h-52 item justify-around py-6 px-8  items-center'>
        <View className='w-full relative'>
          <Text className='text-white font-pblack text-2xl'>
            25,493.00 USD
          </Text>
          <Image source={Icons.mastercard} resizeMode='contain' className='w-12 h-12 absolute right-0 -top-4' />
        </View>

        <View className='flex-row gap-5 '>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-3xl text-white font-psemibold'>****</Text>
          <Text className='text-2xl text-white font-psemibold'>7492</Text>
        </View>

        <View className='flex-row justify-between w-full'>
          <InExAmt amount={'2245.00'} type={'Income'} />
          <InExAmt amount={'3150.00'} type={'Expense'} />
        </View>
      </View>
    </LinearGradient>
  )
}

export default Card

const styles = StyleSheet.create({})