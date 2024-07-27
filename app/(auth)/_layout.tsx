import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { Stack } from 'expo-router'
import { useDispatch } from 'react-redux'
import { getTokenFromLocalStorageThunk } from '@/redux/Reducers/UserSlice'

const _layout = () => {
  const dispatch = useDispatch();
    useEffect(()=>{
    dispatch(getTokenFromLocalStorageThunk());
  },[])
  return (
    <Stack>
      {/* <Stack.Screen name='(auth)' options={{ headerShown: false, }} /> */}
    </Stack>
  )
}

export default _layout