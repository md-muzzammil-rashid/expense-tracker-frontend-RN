import AsyncStorage from "@react-native-async-storage/async-storage";
import { apiConnector } from "../ApiConnector";
import { METHODS, walletEndPoint } from "../apis";


const addWalletAPI = async (walletData)=>{
    const token = await AsyncStorage.getItem("accessToken")

    try {
        const res = await apiConnector(METHODS.POST, walletEndPoint.ADD_WALLET, walletData, {Authorization: token});
        if(res.data?.statusCode >=200 && res.data?.statusCode <300){
            
            return res.data
        }
    } catch (error) {
        console.log("Error in creating wallet:", error);
    }
}

const getWalletByIdAPI = async (walletId)=>{
    const token = await AsyncStorage.getItem("accessToken")

    try {
        const res = await apiConnector(METHODS.GET, walletEndPoint.WALLET_BY_ID+walletId, null, {Authorization: token});
        if(res.data?.statusCode >=200 && res.data?.statusCode <300){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting all wallets:", error);
    }
}

const getAllWalletsAPI = async ()=>{
    const token = await AsyncStorage.getItem("accessToken")

    try {
        const res = await apiConnector(METHODS.GET, walletEndPoint.ALL_WALLET, null, {Authorization: token});
        if(res.data?.statusCode >=200 && res.data?.statusCode <300){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting all wallets:", error);
    }
}



export {
    addWalletAPI,
    getWalletByIdAPI,
    getAllWalletsAPI
}