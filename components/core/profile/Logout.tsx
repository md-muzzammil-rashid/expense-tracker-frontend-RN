import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '@/components/common/CustomButton'

const Logout = ({setVisible}) => {
  return (
    <View className='bg-white w-full py-6 rounded-3xl gap-y-4 '>
      <Text className='text-center font-psemibold text-xl'>Logout?</Text>
      <Text className='text-center font-pregular text-base'>Are you sure do you want to Logout?</Text>
      <View className='flex-row px-4 '>
        <TouchableOpacity onPress={()=>setVisible(false)} className='justify-center mr-1 h-14 rounded-xl items-center flex-grow bg-gray-100 border border-gray-200'>
            <Text className='font-psemibold text-lg text-red-600'>No</Text>
        </TouchableOpacity>
        <TouchableOpacity className='justify-center ml-1 h-14 rounded-xl items-center flex-grow bg-red-600 border border-gray-200'>
            <Text className='font-psemibold text-lg text-white'>Yes</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Logout