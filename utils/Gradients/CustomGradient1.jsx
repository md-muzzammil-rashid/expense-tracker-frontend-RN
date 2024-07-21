import { View, Text } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'

const CustomGradient1 = ({children, gradientClass, index=0 }) => {
  console.log(gradientClass);
  return (
    <LinearGradient
      colors={[
        // '#000000',
        'rgba(35,5,85,1)',
        // '#ff0000',
        // '#00ffff)',
        'rgba(218,125,52,1)',
        'rgba(255,184,46,1)'
      ]}
      start={{ x: 0.0, y: 0.3 }}
      end={{ x: 0.8, y: 1.6 }}
      className={gradientClass}
    >
        {children}
    </LinearGradient>
  )
}

export default CustomGradient1