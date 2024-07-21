import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import AddTransactionCard from '@/components/core/AddTransaction/AddTransactionCard'
import AddTransactionHeader from '@/components/core/AddTransaction/AddTransactionHeader'
import CustomButton from '@/components/common/CustomButton'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'

const add = () => {
    const transactions = useSelector(state=>state?.transaction)

    const handleSubmit = () => {
      // valifate the transactiona

      for(const transaction of transactions){
        // console.log(transaction);
        if([transaction.amount, transaction.walletId].some(val=> val==null || val.trim()==""|| val.trim()=="null" || val == null || val ==  undefined)){
          Toast.show({
            type:'error',
            text1: 'Please fill necessary fields',
          })
          return
        }
        
      }

      // Call to api and Save the transactions and then 

      //TODO: after successful save navigate to success page
      //also clear the redux store
      router.navigate("add-transactions/success")
    }
  return (
    <SafeAreaView>
      <AddTransactionHeader/>
    <ScrollView className=''>

      {
        transactions?.map(transaction=>
            <View>
                <AddTransactionCard  transaction={transaction}/>
            </View>
        )
      }
      {
        transactions.length > 0 &&
      <View className='px-3'>
      <CustomButton pressFunction={handleSubmit} title='Save' color='bg-blue-500'/>
      </View>
      }
    </ScrollView>
    </SafeAreaView>
  )
}

export default add