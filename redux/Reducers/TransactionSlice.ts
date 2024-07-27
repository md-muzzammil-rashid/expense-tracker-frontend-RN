import { categories } from '@/constants/Categories';
import { getTransactionByDateRangeAPI } from "@/Services/Operations/TransactionAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const TransactionSlice = createSlice({
    name:'Transaction',
    initialState:{
        add:[],
        monthlyTransactions:[],
        categories:{},
        type:{}
    },
    reducers:{
        resetTransactionState: (state)=> {
            state.add = [];
            
        },
        addTransaction: (state, action) => {
            state.add.push(action.payload);
        },
        removeTransaction: (state, action) => {
            
            state.add = state.add.filter(item => item.transactionId !== action.payload)
        },
        updateTransaction: (state, action) => {
            
            const index = state.add.findIndex(item => item.transactionId === action.payload.transactionId);
            if (index !== -1) {
                state.add[index] = action.payload;
            }
        }
    },
    extraReducers:(builder)=>{
        builder
       .addCase(getOneMonthTransactionThunk.fulfilled, (state, action)=> {
            state.monthlyTransactions = action.payload
            state.categories = action.payload.reduce((acc, transaction) => {
                if (acc[transaction.category]) {
                    // Add the amount to the existing value
                    acc[transaction.category] += transaction.amount;
                  } else {
                    // Initialize the value if the category does not exist
                    acc[transaction.category] = transaction.amount;
                  }
                  return acc;
              }, {});
            state.type = action.payload.reduce((acc, transaction) => {
                if (acc[transaction.type]) {
                    // Add the amount to the existing value
                    acc[transaction.type] += transaction.amount;
                  } else {
                    // Initialize the value if the type does not exist
                    acc[transaction.type] = transaction.amount;
                  }                return acc;
              }, {});
              return state

            
       }
    )
    }
})
export default TransactionSlice.reducer
export const {resetTransactionState, addTransaction, removeTransaction, updateTransaction} = TransactionSlice.actions

export const getOneMonthTransactionThunk = createAsyncThunk('get/transaction',async ()=>{
    const date = new Date().toISOString().split("T")[0].slice(0,8)
    const res = await getTransactionByDateRangeAPI(date+"01", date+"31")
    if(res?.statusCode == 200)return res.data;
    else throw new Error("Could not fetch Transaction")    
})