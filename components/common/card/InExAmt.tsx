import { View, Text } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const InExAmt = ({type, amount}) => {
  return (
    <View>
    <View className='flex-row gap-2 items-center'>
      <View style={{backgroundColor:'rgba(255,255,255,0.24)'}} className='bg-white p-1 rounded-full '>
        <Ionicons name={`${type=='Income'?"arrow-down":"arrow-up"}`} size={15} color={'white'}/>
      </View>
      <Text className='text-white font-psemibold text-md'>
        {type}
      </Text>
    </View>
    <Text className='text-white font-psemibold text-xl pl-1'>
      {amount}
    </Text>
  </View>
  )
}

export default InExAmt