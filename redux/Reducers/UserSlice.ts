import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { loadingStatus } from "@/constants/loadingStatus"
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserDetailsAPI } from "@/Services/Operations/AuthAPI";


const UserSlice = createSlice({
    initialState:{
        loadingStatus: loadingStatus.LOADING,
        isLoggedIn : false,
        budget:[],
    },
    name: "user",
    reducers:{
        setLoadingStatus: (state, action) => {
            console.log('setting loading status');
            
            state.loadingStatus = action.payload;
        }

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getTokenFromLocalStorageThunk.fulfilled, (state, action)=>{
            // state.loadingStatus = loadingStatus.SUCCESS;
            state.isLoggedIn = true;
            console.log("action", action?.payload?.budget);
            
            state.budget = JSON.parse(action?.payload?.budget).map(bgt=>({...bgt, amount:parseInt(bgt.amount)}))
            return state
        })
        .addCase(getTokenFromLocalStorageThunk.rejected, (state, action)=>{
            
            state.isLoggedIn = false;
            state.loadingStatus = loadingStatus.ERROR;
        })

    }
})

export default UserSlice.reducer
export const {setLoadingStatus } = UserSlice.actions


// const getLoginStatusThunk = createAsyncThunk("login/status", )
export const getTokenFromLocalStorageThunk = createAsyncThunk("get/token", async()=>{
    console.log("in getting token");
    
    const token = await AsyncStorage.getItem("accessToken");
    if(token){
        const res = await getUserDetailsAPI();
        console.log(res?.success);
        if(!res?.success){
            throw new Error("Something went wrong")
        }
        return res?.data;
    }else{
        console.log("No token");
        
        throw new Error("token not found");
    }
})

