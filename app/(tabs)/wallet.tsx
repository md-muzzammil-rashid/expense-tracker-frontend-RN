import { FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React from 'react'
import { router } from 'expo-router'
import CustomButton from '@/components/common/CustomButton'
import { useSelector } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import CardWithoutNumber from '@/components/common/cardWithNumber'

const Wallets = () => {

  const wallets = useSelector(state=>state?.wallet)
  
  return (
    <SafeAreaView edges={['top']} className='relative h-full '>
      <FlatList 
      showsVerticalScrollIndicator={false}
        data={wallets}
        renderItem={card=>
        <TouchableOpacity onPress={()=>router.push(`wallet/${card.item.walletId}`)}>
          <CardWithoutNumber wallet={card.item} color={card.index}/>
        </TouchableOpacity>}

        ListFooterComponent={()=>(
          <View className='px-2'>
            <CustomButton title='Add New Wallet / Card' pressFunction={()=>router.push('wallet/add')} />
          </View>
        )}
        />

    </SafeAreaView>
  )
}

export default Wallets

const styles = StyleSheet.create({})