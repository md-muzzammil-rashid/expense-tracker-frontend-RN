import { View, Text } from 'react-native'
import React from 'react'
import CustomButton from '@/components/common/CustomButton'
import { Redirect, router } from 'expo-router'
import { useSelector } from 'react-redux'
import { loadingStatus } from '@/constants/loadingStatus'
import { SafeAreaView } from 'react-native-safe-area-context'
import AnimatedLottieView from 'lottie-react-native' 
import LoadingAnimation from '@/assets/animation/loading.json'

const index = () => {
  const isLoading = useSelector(state=>state?.user?.loadingStatus)
  const isLoggedIn = useSelector(state=>state?.user?.isLoggedIn)

  if(isLoading == loadingStatus.LOADING && !isLoggedIn ){
    return(
      <SafeAreaView className='justify-center items-center'>
      <View className=' w-32 h-screen'>
        <AnimatedLottieView   style={{width: '100px', aspectRatio: 16/9}}  source={LoadingAnimation} autoPlay />
      </View>
    </SafeAreaView>
    )
  }
  if(isLoggedIn){
    
    return <Redirect href={"(tabs)/"} />
  }
  
  return (
    <View>
        <View>
            <CustomButton pressFunction={()=>router.push("(auth)/signup")} title='Sign Up' />
            <CustomButton pressFunction={()=>router.push("(auth)/login")} title='Sign In' />
        </View>
    </View>
  )
}

export default index