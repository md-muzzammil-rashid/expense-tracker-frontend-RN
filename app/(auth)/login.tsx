import { View, Text } from 'react-native'
import React, { useState } from 'react'
import CustomInput from '@/components/common/CustomInput'
import CustomButton from '@/components/common/CustomButton'
import { getUserDetailsAPI, loginUserAPI } from "@/Services/Operations/AuthAPI"
import AsyncStorage from '@react-native-async-storage/async-storage'
import { router } from 'expo-router'

const login = () => {
  const [credentials, setCredentials] = useState({username:"", password:""});
  const handleLogin = async () => {
    const res = await loginUserAPI(credentials);
    console.log(res);
    console.log(await AsyncStorage.getItem("accessToken"));
    router.dismissAll();
    router.push("(tabs)");




    
    
  }
  return (
    <View>
      <CustomInput  value={credentials.username} handleChange={(e)=>setCredentials(prev=>({...prev, username:e}))} placeholder={"Username"}/>
      <CustomInput value={credentials.password} handleChange={(e)=>setCredentials(prev=>({...prev, password:e}))} placeholder={"Password"} password/>
      <CustomButton pressFunction={handleLogin
      } title='SignIn'/>
    </View>
  )
}

export default login