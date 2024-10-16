import authReducer from "@/features/auth-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer:{
        auth: authReducer,
    }
})

export default store;