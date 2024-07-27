import { View, Text, TouchableOpacity, SafeAreaView } from 'react-native'
import React from 'react'
import TransactionCard from '../Transaction/TransactionCard'
import { router } from 'expo-router'
import { DrawerLayout, DrawerLayoutAndroid, FlatList, GestureHandlerRootView, NativeViewGestureHandler } from 'react-native-gesture-handler'
import { useSelector } from 'react-redux'


const Transaction = () => {
  const transactionData = useSelector(state=>state?.transaction?.monthlyTransactions)
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
          {transactionData.slice(0, 5).map(item => <TransactionCard key={item.transactionId} amount={item.amount} subCategory={item.description} category={item.category} secondaryText={item?.date} type={item.type} />)
          }
      </View>
    </SafeAreaView>
  )
}

export default Transaction