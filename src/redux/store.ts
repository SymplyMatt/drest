import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./states/auth";
import appReducer from "./states/app";
import checkoutReducer from "./states/checkout";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        app: appReducer,
        checkout: checkoutReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
