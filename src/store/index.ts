import {configureStore} from "@reduxjs/toolkit";
import storeSlice from "./slices/storeSlice";

const store =  configureStore({
    reducer: {
        store: storeSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;