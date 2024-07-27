import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import CustomButton from '@/components/common/CustomButton'

const ModalYesNo = ({text1="Yes", text2="No", onAccept, onReject, color1="bg-red-600", color2="bg-gray-100", textColor1="text-white", textColor2="text-gray-700"}) => {
  return (
    <View className='bg-white w-full py-6 rounded-3xl gap-y-4 '>
      <Text className='text-center font-psemibold text-xl'>{text1}</Text>
      <Text className='text-center font-pregular text-base'>{text2}</Text>
      <View className='flex-row px-4 '>
        <TouchableOpacity onPress={onAccept} className={`justify-center mr-1 h-14 rounded-xl items-center flex-grow  ${color1} border border-gray-200`}>
            <Text className={`font-psemibold text-lg ${textColor1}`}>Yes</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onReject} className={`justify-center ml-1 h-14 rounded-xl items-center flex-grow ${color2} border border-gray-200`}>
            <Text className={`font-psemibold text-lg ${textColor2}`}>No</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ModalYesNo