import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import Card from '@/components/core/Dashboard/card'
import { router } from 'expo-router'
import CustomButton from '@/components/common/CustomButton'

const Wallets = () => {
  return (
    <SafeAreaView className='relative h-full '>
      <ScrollView className='mb-16'>
        {
          ["fsdafas","vxczv","sxfqwe","wallet1"].map((card, index)=>
            <TouchableOpacity onPress={()=>router.push(`wallet/${card}`)}>
              <Card color={index}/>
            </TouchableOpacity>
          )
        }
      </ScrollView>
      <View className='absolute w-full px-3 bottom-0'>

      <CustomButton  title='Add New Card'/>
      </View>
    </SafeAreaView>
  )
}

export default Wallets

const styles = StyleSheet.create({})