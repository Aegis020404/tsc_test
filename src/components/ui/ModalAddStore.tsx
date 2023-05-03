import React, {Dispatch, SetStateAction, useState} from 'react';
import cl from '../../styles/ui/ModalAddStore.module.css'
import {useAppDispatch} from "../../hooks";
import {addStore} from "../../store/slices/storeSlice";

interface props {
    setAddModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalAddStore:React.FC<props> = ({setAddModal}:props) => {
    const dispatch = useAppDispatch()
    const [src, setSrc] = useState('');
    const [title, setTitle] = useState('');
    const [err, setErr] = useState(3);
    const [peloader, setPreloader] = useState(0);
    const addImage = () => {
        setPreloader(1);
        if (!src) {
            setErr(1);
        } else if (!title) {
            setErr(3)
        } else if(!err){
            dispatch(addStore({src, title}));
            setAddModal(false);
        }


    }

    return (
        <div className={cl.ModalAddStore}>
            <div className={cl.container}>
                <div className={cl.form}>
                    <div className={cl.title}>Добавьте ссылку на изображение</div>
                    <input className={cl.input} type="text" onChange={(e) => {
                        setSrc(e.target.value)

                    }}/>
                    {err === 1 ?
                        <div className={cl.err}> Обязательна для заполнения</div>
                        : ""}
                    {err === 2 ?
                        <div className={cl.err}> Неверная ссылка на изображение</div>
                        : ""}
                </div>
                <div className={cl.form}>
                    <div className={cl.title}>Добавьте название изображению</div>
                    <input className={cl.input} type="text" onChange={(e) => {
                        setTitle(e.target.value)
                        if(err === 3 && e.target.value) {
                            if (!src) {
                                setErr(1);
                            } else {
                                setErr(0);
                            }
                        }
                    }}/>
                    {err === 3 ?
                        <div className={cl.err}> Обязательна для заполнения</div>
                        : ""}
                </div>
                <button className={cl.btn} onClick={addImage}>ДОБАВИТЬ</button>
                {peloader ?
                    <img src={src} onLoad={() => setErr(0)} onError={() => setErr(2)} hidden={true}  alt=""/> :
                    ""
                }
            </div>
        </div>
    );
};

export default ModalAddStore;
