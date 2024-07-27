import { View, Text } from 'react-native'
import React from 'react'
import { PieChart } from 'react-native-gifted-charts'
import { green } from 'react-native-reanimated/lib/typescript/reanimated2/Colors'
import ColorPair from '@/utils/ColorPair'
import { categories, categoriesJSON } from '@/constants/Categories'
import { useSelector } from 'react-redux'

const UsagePieChart = ({ data }) => {
  console.log(data);
  const type = useSelector(state => state?.transaction?.type)

  return (
    <View className='  m-3 rounded-2xl shadow-md bg-white p-5' >
      <View className='justify-center relative items-center'>
        <PieChart
          radius={120}
          donut
          showText
          focusOnPress
          extraRadiusForFocused={5}
          innerRadius={80}
          data={categories.map(category => ({ value: data[category] || 0, color: ColorPair[category]?.icon_color }))}
        // data={[
        //     {value:33, color: ColorPair['Miscellaneous']?.icon_color},
        //     {value:53, color:ColorPair['Healthcare']?.icon_color},
        //     {value:43, color:ColorPair['Transportation']?.icon_color},
        //     {value:23, color:ColorPair['Gifts & Donations']?.icon_color},
        //     {value:13, color:ColorPair['Entertainment']?.icon_color},
        // ]}
        />
        <View className='absolute'>
          <Text className='text-primary font-psemibold text-lg'>Total</Text>
          <Text className='text-primary font-psemibold text-lg'>{type?.EXPENSE}</Text>
        </View>
      </View>
      <View className='justify-center items-center flex-grow '>
        <View className='  flex-grow'>
          {
            categories.map(category => {
              if (data[category]) return (
                <View key={category} className=' w-full  justify-between flex-row my-1'>
                  <View className='flex-row items-center '>
                    <View className='h-3 w-3 justify-start rounded-full' style={{ backgroundColor: ColorPair[category]?.icon_color }} />
                    <Text className='text-base font-psemibold pl-1'>{categoriesJSON[category]}</Text>
                  </View>
                    <Text className='text-base font-psemibold pl-1'>{data[category]}</Text>
                  
                </View>
              )
            })
          }
        </View>
      </View>
    </View>
  )
}

export default UsagePieChart