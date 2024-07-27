import AsyncStorage from '@react-native-async-storage/async-storage'
import { apiConnector } from '../ApiConnector'
import { budgetEndPoint, METHODS } from '../apis'

const updateBudgetAPI = async (budgetJSON) => {
    const token = await AsyncStorage.getItem("accessToken")
    try {
        apiConnector(METHODS.POST, budgetEndPoint.UPDATE_BUDGET, budgetJSON, {Authorization:token} )
    } catch (error) {
        console.log("Error updating budget", error);
    }
}

export { updateBudgetAPI}