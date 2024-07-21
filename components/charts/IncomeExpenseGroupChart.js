import { View, Text } from 'react-native'
import React from 'react'
import { BarChart } from 'react-native-gifted-charts'
import {barData} from '@/utils/barChartData' 

const IncomeExpenseGroupChart = () => {

  return (
    <View className='w-full'>
        <BarChart
          data={barData}
          barWidth={8}
          spacing={24}
          roundedTop
          roundedBottom
          hideRules 
          xAxisThickness={0}
          yAxisThickness={0}
          yAxisTextStyle={{color: 'gray'}}
          noOfSections={3}
          />    
        </View>
  )
}

export default IncomeExpenseGroupChart