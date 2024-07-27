import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useDispatch } from 'react-redux'
import { addWalletAPI } from '@/Services/Operations/WalletAPI'
import Toast from 'react-native-toast-message'
import { router } from 'expo-router'
import { getWalletThunk } from '@/redux/Reducers/UserSlice'

const add = () => {
    const dispatch = useDispatch();
    const [data, setData] = useState({
        "walletName": "",
        "balance": "",
        "code": ""
    })

    const handleSubmit =  async () => {
        if(data.walletName.trim() === ""|| data.code.trim()==="" || data.code.trim()===""){
            Toast.show({type:'error', text1:"All fields are required"})
            return
        }
        if(data.code.length !== 4 ){
            Toast.show({type:'error', text1:"Last 4 digit number must be exactly 4 digit number"})
            return  // stop execution if code is not 4 digit number
        }
        const res = await addWalletAPI(data);
        console.log(res?.data);
        
        if(res?.statusCode === 201){
            dispatch(getWalletThunk())
            setData({
                "walletName": "",
                "balance": "",
                "code": ""
            })
            router.back();
            Toast.show({type:'success', text1:res?.message})
            
        }else{
            Toast.show({type:'error', text1:res?.message||"Unable to add new Wallet/card"})
        }
    }

    return (
        <SafeAreaView edges={['bottom']} className='h-full p-3'>
            <View className='flex-grow flex'>
                <CustomInput handleChange={(e)=>setData(prev=>({...prev, walletName:e}))} value={data.walletName} placeholder={'Wallet/Card Name'} />
                <CustomInput handleChange={(e)=>setData(prev=>({...prev, balance:e}))} value={data.balance} placeholder={'Initial Balance'} isNum />
                <CustomInput handleChange={(e)=>setData(prev=>({...prev, code:e}))} value={data.code} isNum placeholder={'Last 4 digit Number'} />
            </View>
            <View>
                <CustomButton pressFunction={handleSubmit} color='bg-blue-500' title='Submit' />
            </View>
        </SafeAreaView>
    )
}

export default add