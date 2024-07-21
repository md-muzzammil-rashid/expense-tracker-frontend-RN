import {  Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Card from '@/components/core/Dashboard/card'
import Header from '@/components/common/header'
import Transaction from '@/components/core/Dashboard/Transaction'
import Icons from '@/constants/Icons'
import { StatusBar } from 'expo-status-bar'
import IncomeExpenseGroupChart, {} from '@/components/charts/IncomeExpenseGroupChart'
import { router } from 'expo-router'

const DashBoard = () => {
  return (
    <SafeAreaView className='bg-[#1c2125]'>
        <Header/>
      <ScrollView className='  min-h-screen mb-48'>
        <View className='bg-primary mt-40 min-h-full pb-52 rounded-t-3xl pt-32 relative'>
        <View className='absolute -top-[100]'>
          <Card />
        </View>
        <View className='justify-evenly flex-row my-4 items-center'>
        <TouchableOpacity onPress={()=>router.push("add-transactions/")} activeOpacity={0.85}>
          <View className='justify-center items-center bg-[#f2EBFE] rounded-3xl p-4 w-40  gap-2'>
            <Image source={Icons.income} tintColor={'#8335F8'}/>
            <Text className='font-psemibold'>Add Income</Text>
          </View>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.85}>
          <View className='justify-center items-center bg-[#FFEFEB] rounded-3xl p-4 w-40  gap-2'>
            <Image source={Icons.expense} tintColor={'#FF6739'}/>
            <Text className='font-pse`mibold'>Add Income</Text>
          </View>
          </TouchableOpacity>
        </View>
        <IncomeExpenseGroupChart/>
          <Transaction/>
        </View>
      </ScrollView>
      {/* <StatusBar style='light' /> */}
    </SafeAreaView>
    
  )
}

export default DashBoard

const styles = StyleSheet.create({})