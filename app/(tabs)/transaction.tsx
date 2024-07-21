import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, ScrollView } from 'react-native-gesture-handler'
import { transactionData } from '@/utils/DummyApiData'
import TransactionCard from '@/components/core/Transaction/TransactionCard'
import { StatusBar } from 'expo-status-bar'

const Transaction = () => {
  return (
    <GestureHandlerRootView className='h-full'>
      <SafeAreaView className='bg-primary mx-3'>

          <View className='justify-between flex-row items-center' >
            <Text className='font-pbold  text-2xl'>Transaction</Text>
          </View>
            <FlatList data={transactionData} renderItem={item=><TransactionCard amount={item.item.amount} subCategory={item.item.subcategory} category={item.item.category} type={item.item.type}/>}/>

        <StatusBar style='dark'/>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Transaction

const styles = StyleSheet.create({})