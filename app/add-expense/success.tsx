import { View, Text } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import successAnimation from '@/assets/animation/success-lottie.json'
import CustomButton from '@/components/common/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { router } from 'expo-router'

const success = () => {
  return (
    <SafeAreaView className='justify-between flex-col items-stretch h-full'>
      <View className='flex-grow mb-24 justify-center items-center'>
        <View className='w-full h-56'>
          <LottieView speed={0.6} loop={false} style={{width:"100%", height:128}} autoPlay source={successAnimation} />
        </View>
        <Text className='text-2xl text-green-600 uppercase font-pbold text-center'>success</Text>
        <View className='px-14 pb-36'>
          <Text className='text-center '>
            Your transaction has been saved successfully.
            Please check your wallet or account for the updated balance.
          </Text>
        </View>
      </View>
      <View className='px-2  '>
        <CustomButton title='Go to Home' color='bg-green-600' pressFunction={() => router.navigate('(tabs)/')} />
      </View>
    </SafeAreaView>
  )
}

export default success