import React from 'react';
import cl from '../../styles/ui/Pagination.module.css';
import {getChunkedArr, useAppDispatch, useAppSelector} from "../../hooks";
import {minusCurrentPag, plusCurrentPag} from "../../store/slices/storeSlice";

const Pagination = () => {
    const dispatch = useAppDispatch();

    const {currentPag,list,themesNav} = useAppSelector((state) => state.store)
    console.log(currentPag)
    return (
        <div className={cl.Pagination}>
            <div className={cl.arrow } onClick={() => {
                if(!currentPag) return
                dispatch(minusCurrentPag())
            }}>☚</div>
            <div className={cl.pageCounter}>Cтраница {currentPag+1}</div>
            <div className={cl.arrow} onClick={() => {
                if(currentPag == getChunkedArr(list, themesNav).length -1) {
                    return
                }
                dispatch(plusCurrentPag())
            }}>☛</div>
        </div>
    );
};

export default Pagination;
