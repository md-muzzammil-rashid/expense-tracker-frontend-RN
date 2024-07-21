import { View, Text, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react'
import CategoryCard from '@/components/core/AddTransaction/CategoryCard'
import { categories } from '@/constants/Categories'
import { Calendar, CalendarList, CalendarProvider, ExpandableCalendar, WeekCalendar } from 'react-native-calendars'
import CustomButton from '@/components/common/CustomButton'
import { useDispatch } from 'react-redux'
import { addTransaction } from '@/redux/Reducers/TransactionSlice'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import { v4 as uuid, } from 'uuid'
import 'react-native-get-random-values'

const SelectCategory = () => {
    const [date, setDate] = useState(String(new Date().toLocaleDateString()));
    const currentDate = date.split('/')[2]+'-'+date.split('/')[1]+"-"+date.split('/')[0]
    const dispatch = useDispatch()
    const [metaData, setMetaData] = useState({category:"", date:currentDate, transactionId: uuid(), walletId:"", type:"EXPENSE", amount:null, description:""})
    
    const handlePress = () => {
        if(metaData.category==''){
            Toast.show({
                type:'error',
                text1: 'Please select a category',
            })
            return
        }
        dispatch(addTransaction(metaData))
        router.push('add-transactions/add')
    }
  return (
    <SafeAreaView className='relative justify-between h-screen'>
        <ScrollView>
        <CalendarProvider date={currentDate}>
            <ExpandableCalendar 
            onDayPress={e=>setMetaData(p=>({...p, date:e.dateString}))}
            closeOnDayPress={true} />
        </CalendarProvider>

        <View className={`py-3`}>
        {
            [0,1,2,3].map(item=>
                <View key={item} className='flex-row  justify-evenly'>
                {
                    categories.slice(item*4,(item*4)+4).map(category=>
                       <TouchableOpacity activeOpacity={1} key={category} onPress={()=>setMetaData(p=>({...p, category}))}>
                            <CategoryCard selectedCategory={metaData.category} category={category}/>
                        </TouchableOpacity>
                    )
                }
                </View>
            )
        }
        </View>
        

        </ScrollView>
        <View className='h-40 '>
        <CustomButton pressFunction={handlePress} color='bg-blue-500' title='Proceed Further' classes=' mx-2 mb-0 '/>
        </View>
    </SafeAreaView>
  )
}

export default SelectCategory