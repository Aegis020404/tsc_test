import React, {useState} from 'react';
import cl from '../../styles/Themes/ThemesViewer.module.css';
import backedImg from '../../assets/imgs/backed.png';
import unwrapImg from '../../assets/imgs/unwrap.png';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addStore, cleaneStore} from "../../store/slices/storeSlice";
import ModalAddStore from "../ui/ModalAddStore";
interface props {
    selectedNav: number
}
const ThemesViewer: React.FC<props> = ({selectedNav}: props) => {
    const state = useAppSelector(state => state.store.list)
    const [addModal,setAddModal] = useState(false)
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
                    }}>× Очистить</button>
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
                    <div className={cl.cell}>
                        <img width={100} height={70} src={el.src} alt={el.title}/>
                    </div>
                )}
                <div className={cl.cell + " " + cl.addCell} onClick={addPhoto}>Добавить фотографию</div>
            </div>
        </div>
    );
};

export default ThemesViewer;
