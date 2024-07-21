import TransactionSlice from "@/redux/Reducers/TransactionSlice"
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        transaction: TransactionSlice
    },
    devTools: false,
    enhancers: (getDefaultEnhancers) =>
      getDefaultEnhancers().concat(devToolsEnhancer()),
})

export default store