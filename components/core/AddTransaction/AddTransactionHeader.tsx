import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const AddTransactionHeader = () => {
  return (
    <View className='flex-row justify-between items-center'>
        <Ionicons name='arrow-back' onPress={()=>router.back()} />
      <Text>AddTransactionHeader</Text>
        <Ionicons name='add'onPress={()=>router.push("add-expense/")} />
    </View>
  )
}

export default AddTransactionHeader