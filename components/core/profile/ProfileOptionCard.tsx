import { View, Text, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native'
import React from 'react'
import Icons from '@/constants/Icons'
import { router } from 'expo-router'

const ProfileOptionCard = ({ title }) => {
    return (
        <View className='my-2'>
            <View className=' rounded-2xl h-20 flex-row justify-between'>
                <View className='bg-orange-200 rounded-2xl justify-center w-20  items-center'>
                    <Image source={Icons.person} tintColor={'orange'}/>
                </View>
                <View className='justify-between items-center  flex-grow flex-row'>
                    <Text className='font-psemibold px-3 text-xl text-black/80'>{title}</Text>
                    <Text className='from-black text-3xl text-black/50'>&#8250;</Text>
                </View>
            </View>
        </View>
    )
}

export default ProfileOptionCard