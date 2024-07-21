import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import React, { useEffect, useState } from 'react'
import { categoryIcons } from '@/constants/CategoriesIconsVector'
import { Ionicons } from '@expo/vector-icons'
import CustomInput from '@/components/common/CustomInput'
import { useDispatch } from 'react-redux'
import { removeTransaction, updateTransaction } from '@/redux/Reducers/TransactionSlice'
import DropDownPicker from 'react-native-dropdown-picker';
import RNPicker from 'react-native-picker-select'


const AddTransactionCard = ({transaction}) => {
    const [data, setData] = useState(transaction)
    const [open, setOpen] = useState(false);
    const [discritionAdded, setDescriptionAdded] = useState(false)
    const dispatch = useDispatch()
    const handleDelete = ()=> {
        dispatch(removeTransaction(transaction.transactionId))
    }
    useEffect(()=>{
        dispatch(updateTransaction(data))
    },[data])
  return (
    <View className='bg-white p-5 shadow-md my-2 mx-4 rounded-2xl'>

        {/* Header */}

        <View className='flex-row items-center justify-between'>
            <View className='flex-row items-center gap-1'>
                <Image className='h-10 w-10' source={categoryIcons[transaction?.category]} />
                <Text className='font-pbold'>{transaction?.category}</Text>
            </View>
            <TouchableOpacity onPress={handleDelete} className='bg-gray-300 p-1 rounded-full'>
                <Ionicons name='close' size={20} color={'white'}/>
            </TouchableOpacity>
        </View>

        <View>
            <CustomInput value={data?.amount} isNum handleChange={e=>setData(prev=>({...prev, amount:e}))} placeholder={'Enter Expense'} />
            {/* <CustomInput placeholder={'Enter Title'} /> */}
        </View>
        <View className='h-12 pl-2 justify-center items-center bg-gray-200 rounded-xl'>
            {/* <DropDownPicker
                items={[{label: "PayTm", value: "wallet1"}, {label: "GPay" , value: "wallet2"}]}
                open={open}
                setOpen={setOpen}
                
                /> */}

            <RNPicker
                onValueChange={(e)=>setData(prev=>({...prev, walletId:e}))}
                value={data?.wallet && data.wallet}
                items={[{label: "PayTm", value: "wallet1"}, {label: "GPay" , value: "wallet2"}]}
                
            />

        </View>
        <View>
            {
                discritionAdded?
                <CustomInput value={data?.description} handleChange={e=>setData(prev=>({...prev, description:e}))} multiline placeholder={'Enter Description'}  />
                
                
                :
                <TouchableOpacity onPress={()=>setDescriptionAdded(true)} className='flex-row gap-1 items-center'>
                <>
            <Ionicons name='add' size={18} color={'purple'}/> 
            <Text className='text-purple-500 font-psemibold'>Add Description</Text></>
            </TouchableOpacity>
            }
        </View>

    </View>
  )
}

export default AddTransactionCard