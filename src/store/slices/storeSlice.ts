import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface Store  {
    id: string;
    src: string;
    title: string;
}
type StoreState = {
    list: [Store[],Store[],Store[]];
    currentImage: Store;
    themesNav:number;
    currentPag:number;

}
const spaceState:StoreState = {
    themesNav:0,
    currentPag:0,
    list: [[],[],[]],
    currentImage: {
        id: '',
        src: "",
        title: "",
    }
}
const addLocalstorage = (state: StoreState) => {
    localStorage.setItem("list", JSON.stringify(state));
}


if (!localStorage.getItem("list")) {
    localStorage.setItem("list", JSON.stringify(spaceState));
}
// @ts-ignore
const initialState: StoreState = {...JSON.parse(localStorage.getItem("list")),currentPag:0 }
const storeSlice = createSlice({
    name: "store",
    initialState,
    reducers: {
        addStore(state, action: PayloadAction<{ src: string, title: string}>) {
            state.list[state.themesNav].push({
                id: new Date().toISOString(),
                src: action.payload.src,
                title: action.payload.title,
            })
            addLocalstorage(state)
        },
        cleaneStore(state) {
            state.list = [[],[],[]];
            state.currentImage = {
                id: '',
                src: "",
                title: "",
            };
            addLocalstorage(state)
            state.currentPag = 0;
        },
        toggleSubpage(state, action: PayloadAction<number>) {
            state.currentPag = 0;
            state.themesNav = action.payload;
        },
        plusCurrentPag(state) {
            state.currentPag++;
        },
        minusCurrentPag(state) {
            state.currentPag--;
        },
        addCurrentImage(state,action:PayloadAction<Store>) {
            state.currentImage = action.payload;
        }
    }
})

export const {addStore,cleaneStore,toggleSubpage,minusCurrentPag,plusCurrentPag,addCurrentImage} = storeSlice.actions;
export default storeSlice.reducer;

