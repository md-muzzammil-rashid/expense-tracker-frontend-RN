import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CategoryBudgetCard from '@/components/core/Report/CategoryBudgetCard'
import { categories } from '@/constants/Categories'
import UsagePieChart from '@/components/charts/UsagePieChart'
import { Ionicons } from '@expo/vector-icons'
import { router } from 'expo-router'
import { useSelector } from 'react-redux'

const Add = () => {
  const budget = useSelector(state=>state?.user?.budget)
  const categoriesUsed = useSelector(state=>state?.transaction?.categories)

  return (
    <SafeAreaView>
      <ScrollView>

    <UsagePieChart data = {categoriesUsed}/>
    <Text className='font-pbold px-3 py-4 text-2xl'>
      Monthly Budget
    </Text>
    <FlatList
      data={budget}
      // horizontal
      showsHorizontalScrollIndicator={false}
      renderItem={(itm)=>
        <CategoryBudgetCard start={categoriesUsed[itm.item.category]} end={itm.item.amount} category={itm.item.category}/>
      }
      ListFooterComponent={()=>        
      <View className='  justify-center my-3 w-full px-4 items-center '>
        <View className=' justify-center shadow py-9 w-full border rounded-3xl bg-white border-gray-300 items-center'>
          <TouchableOpacity onPress={()=>router.push("budget/add-budget")} className='p-3 rounded-2xl bg-gray-300 border-gray-400 border'>
            <Ionicons name='add' color={'white'} size={24}/>
          </TouchableOpacity>
          <Text className='font-pbold pt-2'>Make a Change in Budget</Text>
        </View>
        </View>
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