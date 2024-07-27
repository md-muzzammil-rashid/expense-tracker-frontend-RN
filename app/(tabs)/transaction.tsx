import { FlatList, StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler'
import { transactionData } from '@/utils/DummyApiData'
import TransactionCard from '@/components/core/Transaction/TransactionCard'
import { StatusBar } from 'expo-status-bar'
import  { getAllTransactionsAPI } from "@/Services/Operations/TransactionAPI"
import AsyncStorage from '@react-native-async-storage/async-storage'
import CustomModal from '@/components/common/CustomModal'
import CustomButton from '@/components/common/CustomButton'
import ModalYesNo from '@/components/common/ModalYesNo'

const Transaction = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [refreshing, setRefreshing] = useState(false)
  const [hasMore, setHasMore] = useState(true)
  const [modalOpen, setModalOpen] = useState(false)
  const [deleteModalOpen, setDeleteModalOpen] = useState(false)
  const getTransaction = async () =>{
    console.log("loading");
    
    const res = await getAllTransactionsAPI(page, 20)
    console.log(res?.data);
    setData(prevData => [...prevData, ...res?.data]);
    if(res.data.length <10) setHasMore(false)
      console.log(res?.data?.length);    
      
  }
  const handleRefresh = async () => {
    console.log('refreshing');
    
    setRefreshing(true);
    setData([]);
    setPage(0);
    setHasMore(true);
    await getTransaction();
    setRefreshing(false);
  }

  useEffect(()=>{
    hasMore && getTransaction();
    console.log(data);
    
  },[page])
  return (
    <GestureHandlerRootView className='h-full'>
      <SafeAreaView className='bg-primary mx-3'>

          <CustomModal visible={modalOpen} >
            <View className='w-64 py-4 justify-center items-center bg-white'>
              <TouchableWithoutFeedback>
                <Text className='text-lg py-1 font-pregular '>Edit</Text>
              </TouchableWithoutFeedback>
              <TouchableOpacity onPress={()=>{setModalOpen(false);setTimeout(()=>{setDeleteModalOpen(true);console.log("set delete modal open")},500);
              }
              }>
                <Text className='text-lg py-1 font-pregular text-red-600'>Delete</Text>
              </TouchableOpacity>
              <TouchableWithoutFeedback onPress={()=>setModalOpen(false)}>
                <Text className='text-lg py-1 font-pregular '>Cancel</Text>
              </TouchableWithoutFeedback>
            </View>
          </CustomModal>
          <CustomModal visible={deleteModalOpen}>
            <ModalYesNo
              text1="Delete?"
              text2='Are you sure you want to delete?'
              onAccept={()=>null}
              onReject={()=>setDeleteModalOpen(false)}

            />
          </CustomModal>
          <View className='justify-between flex-row items-center' >
            <Text className='font-pbold  text-2xl'>Transaction</Text>
          </View>
            <FlatList 
              data={data} 
              renderItem={item=>
                <TouchableOpacity onLongPress={()=>setModalOpen(true)
                }>
              <TransactionCard  amount={item.item.amount} 
                subCategory={item?.item?.description} 
                category={item?.item?.category} 
                type={item.item.type}
                secondaryText={item?.item?.date}
                />
                </TouchableOpacity>}
                refreshControl={<RefreshControl onRefresh={handleRefresh} refreshing={refreshing}/>
                }
                refreshing={refreshing}
                onEndReached={()=>{hasMore&&setPage(page+1)}}
                ListFooterComponent={()=>(
                  <View>
                    <Text>
                      {hasMore? "Loading..." : "End"}
                    </Text>
                  </View>
                )}
            />

        <StatusBar style='dark'/>
      </SafeAreaView>
    </GestureHandlerRootView>
  )
}

export default Transaction

const styles = StyleSheet.create({})