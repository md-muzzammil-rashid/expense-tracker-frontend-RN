import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryBudgetCard from '@/components/core/Report/CategoryBudgetCard'
import { categories } from '@/constants/Categories'
import UsagePieChart from '@/components/charts/UsagePieChart'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'

const Add = () => {
  return (
    <SafeAreaView>
      <ScrollView>
    <View>
      <Text>Add</Text>
    </View>
    <UsagePieChart/>
    <Text className='font-pbold px-3 py-4 text-2xl'>
      Monthly Budget
    </Text>
    <FlatList
      data={[]}
      horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={()=>
        <CategoryBudgetCard start={232} end={432} category={categories[0]}/>
      }
      ListEmptyComponent={()=>(
        <View className='w-screen  justify-center items-center'>
        <View className=' justify-center shadow w-72 py-9 border rounded-3xl bg-white border-gray-300 items-center'>
          <TouchableOpacity onPress={()=>router.push("budget/add-budget")} className='p-3 rounded-2xl bg-gray-300 border-gray-400 border'>
            <Ionicons name='add' color={'white'} size={24}/>
          </TouchableOpacity>
          <Text className='font-pbold pt-2'>Make a Budget</Text>
        </View>
        </View>
      )}
    />
    </ScrollView>
    </SafeAreaView>
  )
}

export default Add

const styles = StyleSheet.create({})