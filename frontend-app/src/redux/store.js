import { configureStore } from "@reduxjs/toolkit";
import authReducer from './auth/authSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer
    },
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    //devTools: process.env.NODE_ENV !== 'production'
});