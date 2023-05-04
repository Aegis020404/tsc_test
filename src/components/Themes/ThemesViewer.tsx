import React, {useEffect, useState} from 'react';
import cl from '../../styles/Themes/ThemesViewer.module.css';
import backedImg from '../../assets/imgs/backed.png';
import unwrapImg from '../../assets/imgs/unwrap.png';
import {getChunkedArr, useAppDispatch, useAppSelector} from "../../hooks";
import {addStore, cleaneStore, Store} from "../../store/slices/storeSlice";
import ModalAddStore from "../ui/ModalAddStore";
import themesNav from "./ThemesNav";

const ThemesViewer = () => {
    const {list,themesNav,currentPag} = useAppSelector(state => state.store)
    const [addModal, setAddModal] = useState(false)
    const dispatch = useAppDispatch();

    const addPhoto = () => {
        setAddModal(true);
    }
    return (
        <div className={cl.ThemesViewer}>
            {
                addModal ? <ModalAddStore setAddModal={setAddModal}/> : ''
            }
            <div className={cl.management}>
                <div className={cl.btns}>
                    <button className={cl.btn} onClick={() => {
                        dispatch(cleaneStore())
                    }}>× Очистить
                    </button>
                    <button className={cl.btn}><img src={backedImg} width={10} height={12} alt="backet img"/> Выбрать
                    </button>
                </div>
                <div className={cl.unwrapper}>
                    <button className={cl.btn + ' ' + cl.unwrap}><img src={unwrapImg} width={10} height={12}
                                                                      alt="unwrap img"/> Развернуть
                    </button>
                </div>
            </div>
            <div className={cl.lists}>
                {/*{list[themesNav].map((el,idx) =>*/}

                {/*)}*/}
                <div className={cl.cell + " " + cl.addCell} onClick={addPhoto}>Добавить фотографию</div>
                {
                    getChunkedArr(list, themesNav).map((arr, aIx) => <div className={cl.list} style={{left:aIx*1000-currentPag*1000+'px'}}  key={aIx}>{
                        arr.map((item) => (
                            <div className={cl.cell} key={item.id}>
                                <img width={100} height={70} src={item.src} alt={item.title}/>
                            </div>
                        ))
                    }</div>)
                }
            </div>
        </div>
    );
};

export default ThemesViewer;
