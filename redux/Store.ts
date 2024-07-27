import TransactionSlice from "@/redux/Reducers/TransactionSlice"
import devToolsEnhancer from "redux-devtools-expo-dev-plugin";
import UserSlice from "./Reducers/UserSlice";
import WalletSlice from "./Reducers/WalletSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
    reducer:{
        transaction: TransactionSlice,
        user: UserSlice,
        wallet: WalletSlice
    },
    devTools: false,
    enhancers: (getDefaultEnhancers) =>
      getDefaultEnhancers().concat(devToolsEnhancer()),
})

export default store