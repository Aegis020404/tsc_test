import {useDispatch, useSelector, TypedUseSelectorHook} from "react-redux"
import type {RootState, AppDispatch} from "./store";
import {Store} from "./store/slices/storeSlice";

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const getChunkedArr = (list:Store[][],themesNav:number): Store[][] => {
    const chunkedArr = [];
    for (let i = 0; i < list[themesNav].length; i += 6) {
        chunkedArr.push(list[themesNav].slice(i, i + 6));
    }
    return chunkedArr;
}