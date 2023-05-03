import React from 'react';
import cl from '../../styles/Themes/ThemesViewer.module.css';
import backedImg from '../../assets/imgs/backed.png';
import unwrapImg from '../../assets/imgs/unwrap.png';

const ThemesViewer = () => {
    return (
        <div className={cl.ThemesViewer}>
            <div className={cl.management}>
                <div className={cl.btns}>
                    <button className={cl.btn}>× Очистить</button>
                    <button className={cl.btn}><img src={backedImg} width={10} height={12} alt="backet img"/> Выбрать</button>
                </div>
                <div className={cl.unwrapper}>
                    <button className={cl.btn +' '+ cl.unwrap}><img src={unwrapImg} width={10} height={12} alt="unwrap img"/> Развернуть</button>
                </div>
            </div>
            <div className={cl.lists}>
                <div className={cl.list}>Добавить фотографию</div>
            </div>
        </div>
    );
};

export default ThemesViewer;
