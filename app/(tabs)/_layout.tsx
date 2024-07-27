import { Redirect, Tabs } from 'expo-router';
import React, { useEffect } from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Image } from 'react-native';
import icons from '@/constants/Icons'
import TabIcon from '@/components/common/TabIcon';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import { getWalletThunk } from '@/redux/Reducers/WalletSlice';
import { getOneMonthTransactionThunk } from '@/redux/Reducers/TransactionSlice';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const {isLoggedIn, loadingStatus} = useSelector(state=>state?.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    isLoggedIn && dispatch(getWalletThunk());
    isLoggedIn && dispatch(getOneMonthTransactionThunk());
    
  },[])
  
  

 
  return (
    <Tabs
    
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarStyle:{
          backgroundColor: 'white',
          borderRadius: 32,
          height:85,
          paddingHorizontal:20
          
        },
        tabBarShowLabel:false
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <TabIcon icon={icons.home} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="transaction"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <TabIcon icon={icons.transaction} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="report"
        options={{
          title: 'report',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <TabIcon icon={icons.report} focused={focused} />
          ),
        }}
      />
      <Tabs.Screen
        name="wallet"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
            <TabIcon icon={icons.wallet} focused={focused} />
          ),
        }}
      />
        <Tabs.Screen
          name="profile"
          options={{
            title: 'Home',
            tabBarIcon: ({ color, focused }) => (
              // <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
              <TabIcon icon={icons.person} focused={focused} />
            ),
          }}
        />
    </Tabs>
  );
}
