const BASE_URL = "http://192.168.179.81:8000/api/v1"
// const BASE_URL = "http://localhost:8000/api/v1"

const METHODS = {
    GET : 'GET',
    POST : 'POST',
    PUT : 'PUT',
    DELETE : 'DELETE'
}

const route = {
    AUTH: BASE_URL + "/users",
    TRANSACTION: BASE_URL + "/transaction",
    REPORT: BASE_URL + "/reports",
    WALLET: BASE_URL + "/wallets",
    BUDGET: BASE_URL + "/budget"
}

const budgetEndPoint = {
    UPDATE_BUDGET: route.BUDGET + "/"
}

const authEndPoint = {
    REGISTER : route.AUTH + "/register",
    LOGIN : route.AUTH + "/login",
    FORGOT_PASSWORD : route.AUTH + "/forgot-password",
    RESET_PASSWORD : route.AUTH + "/reset-password",
    USER_DETAIL : route.AUTH + "/user-detail",
    LOGOUT: route.AUTH+ "/logout"

}

const transactionEndPoint = {
    ADD_TRANSACTION : route.TRANSACTION + "/add-transactions",
    ALL_TRANSACTION : route.TRANSACTION + "/all-transactions",
    TRANSACTION_BETWEEN_DATE_RANGE : route.TRANSACTION + "/transactions",
    TRANSACTION_BY_ID : route.TRANSACTION + "/",
    TRANSACTION_BY_WALLET : route.TRANSACTION + "/wallet/"
}

const reportEndPoint = {
    TRANSACTION_BY_DATE : route.REPORT + "/transactions-by-date",
    EXPENSE_BY_CATEGORY : route.REPORT + "/category/expense",
    INCOME_BY_MONTH : route.REPORT + "/category/income",
    TOP_EXPENSE : route.REPORT + "/top-expense",
    TOP_INCOME : route.REPORT + "/top-income",
    MONTHLY_SAVINGS : route.REPORT + "/monthly-saving",
    EARLY_SAVINGS : route.REPORT + "/yearly-saving",

}

const walletEndPoint = {
    ADD_WALLET : route.WALLET + "/add-wallet",
    ALL_WALLET : route.WALLET + "/get-wallets",
    WALLET_BY_ID : route.WALLET + "/",
}

export {
    walletEndPoint,
    reportEndPoint,
    transactionEndPoint,
    authEndPoint,
    budgetEndPoint,
    METHODS
}