import { View, Text, Image } from 'react-native'
import React from 'react'
import pfp from '@/assets/images/pfp.jpg'
import { Ionicons } from '@expo/vector-icons'

const Header = () => {
  return (
    <View className='flex-row w-full justify-between items-center px-3 py-2'>
        <View className='flex-row items-center gap-3'>
            <Image source={pfp} className='w-11 h-11 rounded-full' resizeMode='cover'/>
            <Text className='font-psemibold text-white'>Hi, Ayaan</Text>
        </View>
        <View>
            <Ionicons name='notifications' color={'white'} size={24}/>
        </View>
    </View>
  )
}

export default Header