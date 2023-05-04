import React, {useEffect, useState} from 'react';
import cl from '../../styles/Themes/ThemesViewer.module.css';
import backedImg from '../../assets/imgs/backed.png';
import unwrapImg from '../../assets/imgs/unwrap.png';
import {getChunkedArr, useAppDispatch, useAppSelector} from "../../hooks";
import {addCurrentImage, cleaneStore} from "../../store/slices/storeSlice";
import ModalAddStore from "../ui/ModalAddStore";
import ModalProductAdd from "../ui/ModalProductAdd";

const ThemesViewer = () => {

    const {list, themesNav, currentPag} = useAppSelector(state => state.store)
    const [addModal, setAddModal] = useState(false)
    const [isWrapper, setWrapper] = useState(false)
    const [isModalSuccessAdded, setModalSuccessAdded] = useState(false)
    const dispatch = useAppDispatch();
    const addPhoto = () => {
        setAddModal(true);
    }
    return (
        <div className={isWrapper ? cl.ThemesViewer + " " + cl.ThemesViewerUnwrapped : cl.ThemesViewer}>
            {
                addModal ? <ModalAddStore setAddModal={setAddModal}/> : ''
            }
            {
                isModalSuccessAdded ? <ModalProductAdd setModalSuccessAdded={setModalSuccessAdded}/> : ''
            }
            <div className={cl.management}>
                <div className={cl.btns}>
                    <button className={cl.btn} onClick={() => {
                        dispatch(cleaneStore())
                    }}>× Очистить
                    </button>
                    <button className={cl.btn} onClick={() => {
                        setModalSuccessAdded(true);
                    }}><img src={backedImg} width={10} height={12} alt="backet img"/> Выбрать
                    </button>
                </div>
                <div className={cl.unwrapper} onClick={() => {
                    setWrapper(state => !state);
                    console.log(isWrapper);
                }}>
                    <button className={cl.btn + ' ' + cl.unwrap}><img src={unwrapImg} width={10} height={12}
                                                                      alt="unwrap img"/> Развернуть
                    </button>
                </div>
            </div>

            {isWrapper ?
                <div className={cl.list}>
                    {list[themesNav].map((item, idx) => <div className={cl.cell} key={item.id}>
                        <img width={100} height={70} src={item.src} alt={item.title}/>
                    </div>)}
                </div>

                :
                <div className={cl.lists}>

                    <div className={cl.cell + " " + cl.addCell} onClick={addPhoto}>Добавить фотографию</div>
                    {
                        getChunkedArr(list, themesNav).map((arr, aIx) => <div className={cl.list}
                                                                              style={{left: aIx * 1000 - currentPag * 1000 + 'px'}}
                                                                              key={aIx}>{
                            arr.map((item) => (
                                <div className={cl.cell} key={item.id}>
                                    <img onClick={() => {
                                        dispatch(addCurrentImage(item))
                                    }} width={100} height={70} src={item.src} alt={item.title}/>
                                </div>
                            ))
                        }</div>)
                    }
                </div>
            }


        </div>
    );
};

export default ThemesViewer;
