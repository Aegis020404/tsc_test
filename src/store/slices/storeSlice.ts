import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import store from "../index";

type Store = {
    id: string;
    src: string;
    title: string;
}
const addLocalstorage = (state: StoreState) => {
    localStorage.setItem("list", JSON.stringify(state));
}
type StoreState = {
    list: Store[];
    currentImage: Store;
}

if (!localStorage.getItem("list")) {
    localStorage.setItem("list", JSON.stringify({
        list: [],
        currentImage: {
            id: '',
            src: "",
            title: "",
        }
    }));
}
// @ts-ignore
const initialState: StoreState = JSON.parse(localStorage.getItem("list"))

const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        addStore(state, action: PayloadAction<{ src: string, title: string }>) {
            state.list.push({
                id: new Date().toISOString(),
                src: action.payload.src,
                title: action.payload.title,
            })
            addLocalstorage(state)
        },
        cleaneStore(state) {
            state.list = [];
            state.currentImage = {
                id: '',
                src: "",
                title: "",
            };

        }
    }
})

export const {addStore,cleaneStore} = storeSlice.actions;
export default storeSlice.reducer;