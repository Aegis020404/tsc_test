import React from 'react';
import cl from '../styles/Viewer.module.css';
import {useAppDispatch, useAppSelector} from "../hooks";

const Viewer = () => {
    const state = useAppSelector(state => state.store.currentImage)
    return (
        <div className={cl.Viewer}>
            <div className={cl.ViewerWindow}>
                {state.id ?
                    <img src={state.src} width={320} height={230} alt={state.title}/>
                    : ''
                }
            </div>
        </div>
    );
};

export default Viewer;
