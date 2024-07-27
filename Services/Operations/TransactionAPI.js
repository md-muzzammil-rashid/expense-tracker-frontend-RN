import AsyncStorage from "@react-native-async-storage/async-storage"
import { apiConnector } from "../ApiConnector"
import { METHODS, transactionEndPoint } from "../apis"

const addTransactionsAPI = async (transactionsData) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.POST, 
            transactionEndPoint.ADD_TRANSACTION, 
            transactionsData, 
            {Authorization: token}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in adding transaction", error)
    }
}

const getAllTransactionsAPI = async (pageNumber, pageSize) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            transactionEndPoint.ALL_TRANSACTION, 
            null, 
            {Authorization: token}, 
            {pageNumber, pageSize}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in getting all transactions", error)
    }
}

const getTransactionByIdAPI = async (transactionId) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            transactionEndPoint.TRANSACTION_BY_ID+transactionId, 
            null, 
            {Authorization: token}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in getting transaction by id", error)
    }
}

const updateTransactionByIdAPI = async (transactionId, transactionData) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.PUT, 
            transactionEndPoint.TRANSACTION_BY_ID+transactionId, 
            transactionData, 
            {Authorization: token}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in updating transaction by id", error)
    }
}

const deleteTransactionByIdAPI = async (transactionId) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.DELETE, 
            transactionEndPoint.TRANSACTION_BY_ID+transactionId, 
            null, 
            {Authorization: token}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in deleting transaction by id", error)
    }
}

const getTransactionByDateRangeAPI = async (startDate, endDate) => {
    console.log("statd", startDate, endDate);
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            transactionEndPoint.TRANSACTION_BETWEEN_DATE_RANGE, 
            null, 
            {Authorization: token}, 
            {startDate, endDate}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in getting transaction by date range", error)
    }
}

const getTransactionByWalletAPI = async (walletId, pageNumber, pageSize) =>{
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            transactionEndPoint.TRANSACTION_BY_WALLET+walletId, 
            null, 
            {Authorization: token}, 
            {pageNumber, pageSize}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in getting transaction by wallet", error)
    }
}

const getTransactionByDateRangeAndWalletAPI = async (walletId, startDate, endDate) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            transactionEndPoint.TRANSACTION_BETWEEN_DATE_RANGE+walletId, 
            null, 
            {Authorization: token}, 
            {startDate, endDate}
        )
        if(res.data?.statusCode >= 200 && res.data?.statusCode < 300){
            return res.data
        }
    } catch (error) {
        console.log("error in getting transaction by date range and wallet", error)
    }
}

export {
    addTransactionsAPI,
    getAllTransactionsAPI,
    getTransactionByIdAPI,
    updateTransactionByIdAPI,
    deleteTransactionByIdAPI,
    getTransactionByDateRangeAPI,
    getTransactionByWalletAPI,
    getTransactionByDateRangeAndWalletAPI,
}