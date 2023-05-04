import React, {FormEvent, useState} from 'react';
import cl from '../../styles/ui/ModalAddStore.module.css'
import {useAppDispatch} from "../../hooks";
import {addStore} from "../../store/slices/storeSlice";

interface props {
    setAddModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalAddStore: React.FC<props> = ({setAddModal}: props) => {
    const dispatch = useAppDispatch()
    const [src, setSrc] = useState('');
    const [title, setTitle] = useState('');
    const [err, setErr] = useState(0);
    const [success, setSuccess] = useState(0);
    const addImage = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!src) {
            setErr(1);
        } else if (!title) {
            setErr(3)
        } else if (!success) {
            setErr(2);
        } else if (title.length >=25) {
            setErr(4);
        } else {
            dispatch(addStore({src, title}));
            setAddModal(false);
        }
        return false;
    }
    const toClose = () => {
        setAddModal(false);
    }
    return (
        <div className={cl.ModalAddStore}>
            <form  onSubmit={addImage}>
            <div className={cl.close} onClick={toClose}>×</div>
            <div className={cl.container}>
                <div className={cl.form}>
                    <div className={cl.title}>Добавьте ссылку на изображение</div>
                    <input className={cl.input} type="text" value={src} onChange={(e) => {
                        setSrc(e.target.value)

                    }}/>
                    {err === 1 ?
                        <div className={cl.err}> Обязательна для заполнения</div>
                        : ""}
                    {err === 2 ?
                        <div className={cl.err}> Неверная ссылка на изображение</div>
                        : ""}
                    {err === 4 ?
                        <div className={cl.err}> Название должно быть меньше 25 символов</div>
                        : ""}
                </div>
                <div className={cl.form}>
                    <div className={cl.title}>Добавьте название изображению</div>
                    <input className={cl.input} type="text" value={title} onChange={(e) => {
                        setTitle(e.target.value)
                        if (err === 3 && e.target.value) {
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
                <button type="submit" className={cl.btn} >ДОБАВИТЬ</button>

                <img src={src}
                     onLoad={() => setSuccess(1)}
                     onError={() => setSuccess(0)}
                     hidden={true} alt=""/>
            </div>
        </form>

</div>
    );
};

export default ModalAddStore;
