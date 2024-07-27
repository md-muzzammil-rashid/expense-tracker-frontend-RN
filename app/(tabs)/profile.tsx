import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import pfp from '@/assets/images/pfp.jpg'
import CustomGradient1, { } from '@/utils/Gradients/CustomGradient1'
import ProfileOptionCard from '@/components/core/profile/ProfileOptionCard'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import CustomModal from '@/components/common/CustomModal'
import Logout from '@/components/common/ModalYesNo'
import { logoutUserAPI } from '@/Services/Operations/AuthAPI'
import { router } from 'expo-router'

const Profile = () => {
  const [logoutVisible, setLogoutVisible] = useState(false)
  const handleLogout = async () => {
    setLogoutVisible(false)
    await logoutUserAPI();
    // router.dismissAll()

    router.push("(auth)/")
  }
  return (
    <SafeAreaView className='bg-primary'>

        <View className=' flex-row items-center gap-x-3  p-3'>
          <View className='w-[90px] justify-center items-center overflow-hidden h-[90px] rounded-full'>
            <CustomGradient1 classes={' rounded-full'}>
              <View className='p-2  '>
                <Image source={pfp} className='w-20 h-20  rounded-full' resizeMode='cover' />
              </View>
            </CustomGradient1>
          </View>
          <View>
          <Text className='text-primary text-xl font-pbold'>Md Muzzammil Rashid</Text>
          <Text className='text-primary text-sm font-pregular'>ayaanrasid@gmail.com</Text>

          </View>
        </View>
        <View className=' p-6  w-full h-full bg-white mt-4   rounded-t-3xl'>
          <ProfileOptionCard title={'Account Info'} />
          <ProfileOptionCard title={'Security Code'} />
          <ProfileOptionCard title={'Privacy Policy'} />
          <ProfileOptionCard title={'Setting'} />
          <TouchableOpacity onPress={()=>setLogoutVisible(!logoutVisible)}>
            <ProfileOptionCard  title={'Logout'} />
          </TouchableOpacity>
        </View>
        <CustomModal visible={logoutVisible}>
          <Logout 
            text2='Are you sure do you want to Logout?' 
            text1='Logout?'
            onReject={()=>setLogoutVisible(false)}
            onAccept={handleLogout}
          />
        </CustomModal>
    <StatusBar style='dark'/>

    </SafeAreaView>
  )
}

export default Profile

const styles = StyleSheet.create({})