import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import Card from '@/components/core/Dashboard/card'
import TransactionTypeHeader from '@/components/core/Transaction/TransactionTypeHeader'
import Transaction from '@/app/(tabs)/transaction'

const index = () => {
    const {walletId} = useLocalSearchParams()
    const [active, setActive] = useState(0);
  return (
    <View>
        <Card />
        <TransactionTypeHeader active={active} setActive={setActive}/>
      <Transaction/>
    </View>
  )
}

export default index