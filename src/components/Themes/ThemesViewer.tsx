import React from 'react';
import cl from '../../styles/Themes/ThemesViewer.module.css';
import backedImg from '../../assets/imgs/backed.png';
import unwrapImg from '../../assets/imgs/unwrap.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addStore} from "../../store/slices/storeSlice";

const ThemesViewer = () => {
    const state = useAppSelector(state => state.store.list)
    const dispatch = useAppDispatch();
    const addPhoto = () => {
        dispatch(addStore({src: "r32r32", title: 'eqeqw'}))
        console.log("work");
    }

    return (
        <div className={cl.ThemesViewer}>
            <div className={cl.management}>
                <div className={cl.btns}>
                    <button className={cl.btn}>× Очистить</button>
                    <button className={cl.btn}><img src={backedImg} width={10} height={12} alt="backet img"/> Выбрать
                    </button>
                </div>
                <div className={cl.unwrapper}>
                    <button className={cl.btn + ' ' + cl.unwrap}><img src={unwrapImg} width={10} height={12}
                                                                      alt="unwrap img"/> Развернуть
                    </button>
                </div>
            </div>
            <div className={cl.list}>
                {state.map(el =>
                    <div>

                    </div>
                )}
                <div className={cl.cell + " " + cl.addCell} onClick={addPhoto}>Добавить фотографию</div>
            </div>
        </div>
    );
};

export default ThemesViewer;
