import { Image, StyleSheet, Text, View, useColorScheme } from 'react-native'
import React from 'react'
import { Colors } from '@/constants/Colors'

const TabIcon = ({icon, focused}) => {
    const color = useColorScheme()
  return (
    <View className=''>
        <Image
            source={icon}   
            tintColor={focused? Colors.light.fontPrimary: Colors.light.fontSecondary }  
            className='w-8 h-8'

        />
      {/* <Text>{name}</Text> */}
    </View>
  )
}

export default TabIcon

const styles = StyleSheet.create({})