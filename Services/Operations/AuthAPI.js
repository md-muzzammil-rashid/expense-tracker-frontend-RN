import { apiConnector } from "../ApiConnector"
import { authEndPoint, METHODS } from "../apis"
import AsyncStorage from "@react-native-async-storage/async-storage";

const registerUserAPI = async (userData) => {
    try {
        const res = await apiConnector(METHODS.POST, authEndPoint.REGISTER, userData);
        if(res.data?.statusCode >=200 && res.data?.statusCode <300){
            return res.data
        }
    } catch (error) {
        console.log("Error in creating user:", error);
    }
}

const loginUserAPI = async (userData) => {
    try {
        const res = await apiConnector(METHODS.POST,authEndPoint.LOGIN, userData );
        if(res.data?.statusCode >=200 && res.data?.statusCode <300){
            if(res.data?.statusCode==200){
                console.log(res);
                await AsyncStorage.setItem("accessToken", "Bearer "+res.data.data.accessToken);
                console.log("access token setted");
                await AsyncStorage.setItem("refreshToken","Bearer "+res.data.data.refreshToken);
                console.log("refresh token setted");
            }
            return res.data;
            //TODO: save access token and refresh token and user data
        }
    } catch (error) {
        console.log("Error in login user:", error);
    }
}

const getUserDetailsAPI = async () => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(METHODS.GET, authEndPoint.USER_DETAIL, null, {Authorization: token} )
        if(res.data.statusCode === 200){
            return res.data
        }
    } catch (error) {
        console.log("Error in getting user:", error);
    }
}

const logoutUserAPI = async () => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        await AsyncStorage.removeItem("accessToken");
        await AsyncStorage.removeItem("refreshToken");
        await apiConnector(METHODS.GET, authEndPoint.LOGOUT, null, {Authorization: token} )
        console.log("Logged out successfully");
        // TODO: Clear user data and tokens from AsyncStorage
        return true
    } catch (error) {
        
    }
}

export {
    loginUserAPI,
    registerUserAPI,
    getUserDetailsAPI,
    logoutUserAPI
}