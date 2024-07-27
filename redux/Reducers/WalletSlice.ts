import { loadingStatus } from "@/constants/loadingStatus";
import { getAllWalletsAPI } from "@/Services/Operations/WalletAPI";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { setLoadingStatus } from "./UserSlice";

const walletSlice = createSlice({
    name: "wallet",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getWalletThunk.fulfilled, (state, action)=>{
            console.log("Wallet setted");
            //state.wallet = action.payload.data
            
            // const dispatch = useDispatch()
            // dispatch(setLoadingStatus(loadingStatus.SUCCESS))
            //state.loadingStatus = loadingStatus.SUCCESS
            return state = action.payload.data
        })
        .addCase(getWalletThunk.rejected,(state, action)=>{
            //state.loadingStatus = loadingStatus.ERROR;
            //console.log("error", action?.error);
        })
    }
})

export default walletSlice.reducer
export const {} = walletSlice.actions

export const getWalletThunk = createAsyncThunk('get/wallet', async(payload, {dispatch})=>{
    console.log('getting wallets...');
    
    const res = await getAllWalletsAPI();
    if(res?.success){
        dispatch(setLoadingStatus(loadingStatus.SUCCESS))
        console.log("success : wallet fetched!", );
        return res
        
    }
    throw new Error("Something went wrong");
    
})