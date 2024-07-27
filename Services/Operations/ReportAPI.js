import { METHODS, reportEndPoint } from "../apis"


const getTransactionByDateAPI = async (startDate, endDate) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        const res = await apiConnector(
            METHODS.GET, 
            reportEndPoint.TRANSACTION_BETWEEN_DATE_RANGE, 
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