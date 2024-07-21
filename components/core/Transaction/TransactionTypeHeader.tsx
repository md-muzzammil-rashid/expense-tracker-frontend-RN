import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'

const TransactionTypeHeader = ({active, setActive}) => {
  return (
    <View className='mx-12 flex-row rounded-2xl border-2 border-gray-300 bg-white overflow-hidden'>
        <TouchableOpacity onPress={()=>setActive(0)} className={`${active==0?"rounded-2xl bg-fuchsia-950 ":""}  py-3 px-5 w-[110] flex-shrink-0` }>
        
        <Text className={`${active==0?"text-gray-200":" text-gray-400"} text-base font-psemibold text-center`}>All</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActive(1)} className={`${active==1?"rounded-2xl bg-fuchsia-950 ":""} w-[110] py-3 ` }>
        
        <Text className={`${active==1?"text-gray-200":" text-gray-400"} text-base font-psemibold text-center`}>Expense</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>setActive(2)} className={`${active==2?"rounded-2xl bg-fuchsia-950 ":""}  py-3 px-5 w-[110]` }>
        
        <Text className={`${active==2?"text-gray-200":" text-gray-400"} text-base font-psemibold text-center`}>Income</Text>
        </TouchableOpacity>

    </View>
  )
}

export default TransactionTypeHeader