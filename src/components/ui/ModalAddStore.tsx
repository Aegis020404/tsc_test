import React, {useState} from 'react';
import cl from '../../styles/ui/ModalAddStore.module.css'

const ModalAddStore = () => {
    const [src, setSrc] = useState('');
    const [title, setTitle] = useState('');
    const [err, setErr] = useState(1);
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
                </div>
                <div className={cl.form}>
                    <div className={cl.title}>Добавьте название изображению</div>
                    <input className={cl.input} type="text" onChange={(e) => {
                        setTitle(e.target.value)
                    }}/>
                </div>
                <button className={cl.btn}>ОТПРАВИТЬ</button>
            </div>
        </div>
    );
};

export default ModalAddStore;
