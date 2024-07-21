import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import TransactionCard from '../Transaction/TransactionCard'
import { router } from 'expo-router'
import { transactionData } from '@/utils/DummyApiData'
import { DrawerLayout, DrawerLayoutAndroid, FlatList, GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'

const Transaction = () => {
  return (
    <SafeAreaView>
      <View className='p-2 px-5'>
        <View>
          <View className='justify-between flex-row items-center my-2' >
            <Text className='font-pbold  text-2xl'>Transaction</Text>
            <TouchableOpacity className='bg-secondary px-3 py-1 rounded-[15px]' onPress={() => router.push('(tabs)/transaction')} activeOpacity={0.8}>
              <Text className='text-base font-semibold text-white '>See All</Text>
            </TouchableOpacity>
          </View>
        </View>
          {transactionData.slice(0, 5).map(item => <TransactionCard amount={item.amount} subCategory={item.subcategory} category={item.category} type={item.type} />)
          }
      </View>
    </SafeAreaView>
  )
}

export default Transaction