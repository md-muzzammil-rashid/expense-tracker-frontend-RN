import { createSlice } from "@reduxjs/toolkit";

const TransactionSlice = createSlice({
    name:'Transaction',
    initialState:[],
    reducers:{
        resetTransactionState: (state)=> {
            return [];
        },
        addTransaction: (state, action) => {
            state.push(action.payload);
        },
        removeTransaction: (state, action) => {
            
            return state = state.filter(item => item.transactionId !== action.payload)
        },
        updateTransaction: (state, action) => {
            
            const index = state.findIndex(item => item.transactionId === action.payload.transactionId);
            if (index !== -1) {
                state[index] = action.payload;
            }
        }
    }
})
export default TransactionSlice.reducer
export const {resetTransactionState, addTransaction, removeTransaction, updateTransaction} = TransactionSlice.actions