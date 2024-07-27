import { View, Text, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useLocalSearchParams } from 'expo-router'
import TransactionTypeHeader from '@/components/core/Transaction/TransactionTypeHeader'
import Transaction from '@/app/(tabs)/transaction'
import {getTransactionByWalletAPI} from '@/Services/Operations/TransactionAPI'
import TransactionCard from '@/components/core/Transaction/TransactionCard'
import Card from '@/components/common/card'

const index = () => {
    const {walletId} = useLocalSearchParams()
    const [active, setActive] = useState(0);
    const [pageNumber, setPageNumber] = useState(0);
    const [transactions, setTransactions] = useState([])
    const [transactionsFiltered, setTransactionsFiltered] = useState([])
    const [hasMore, setHasMore] = useState(true)
    const getWalletTransaction = async () => {
      console.log("makking call");
      
      
      const res = await getTransactionByWalletAPI(walletId,pageNumber, 10)
      setTransactions(prevData => [...prevData, ...res?.data]);
      if(res?.data?.length < 10)setHasMore(false)
      
    }
    const filterType = () => {
      if(active == 0){
        setTransactionsFiltered(transactions)
      }else if(active == 1){
        setTransactionsFiltered(transactions.filter(transaction=> transaction.type == "EXPENSE"))
        
      }else{
        setTransactionsFiltered(transactions.filter(transaction=> transaction.type == "INCOME"))

      }
    }
    useEffect(()=>{
      hasMore && getWalletTransaction();
      console.log(pageNumber);
      
    },[pageNumber])

    useEffect(()=>{
      filterType();
      console.log("filtered", pageNumber);
    },[active, transactions])
  return (
    <View>
      <FlatList
      data={transactionsFiltered}
      ListHeaderComponent={()=>(
        <>
        <Card />
        <TransactionTypeHeader active={active} setActive={setActive}/>
        </>
      )}
      renderItem={(item)=>(
        <TransactionCard amount={item.item.amount} 
                subCategory={item?.item?.description} 
                category={item?.item?.category} 
                type={item.item.type}
                secondaryText={item?.item?.date}
                />
      )} 
      onEndReached={()=>hasMore&&setPageNumber(pageNumber+1)}
      />
    </View>
  )
}

export default index