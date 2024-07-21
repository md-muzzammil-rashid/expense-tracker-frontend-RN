import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import ColorPair from '@/utils/ColorPair'

const UsagePieChart = () => {
  return (
    <View className='justify-center relative items-center m-3 rounded-2xl shadow-md bg-white p-5'>
      <PieChart
      radius={120}
      donut
      showText
      focusOnPress
      extraRadiusForFocused={5}
    innerRadius={73}
        data={[
            {value:33, color: ColorPair['Miscellaneous']?.icon_color},
            {value:53, color:ColorPair['Healthcare']?.icon_color},
            {value:43, color:ColorPair['Transportation']?.icon_color},
            {value:23, color:ColorPair['Gifts & Donations']?.icon_color},
            {value:13, color:ColorPair['Entertainment']?.icon_color},
        ]}
      />
      <View className='absolute'>
        <Text className='text-primary font-psemibold text-lg'>Total</Text>
        <Text className='text-primary font-psemibold text-lg'>4253</Text>
      </View>
    </View>
  )
}

export default UsagePieChart