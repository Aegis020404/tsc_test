import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import store from "../index";

type Store = {
    id: string;
    src: string;
    title: string;
}

type StoreState = {
    list:Store[];
}

const initialState:StoreState = {
    list: []
}
const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        addStore(state,action: PayloadAction<{src:string,title:string}>) {


            state.list.push({
                id: new Date().toISOString(),
                src: action.payload.src,
                title: action.payload.title,
            })



        }
    }
})

export const {addStore} = storeSlice.actions;
export default storeSlice.reducer;