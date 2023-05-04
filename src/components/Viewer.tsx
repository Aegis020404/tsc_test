import React from 'react';
import cl from '../styles/Viewer.module.css';
import {useAppDispatch, useAppSelector} from "../hooks";


interface props {
     setWidth: React.Dispatch<React.SetStateAction<number | undefined>>
     setHeight: React.Dispatch<React.SetStateAction<number | undefined>>
}

const Viewer:React.FC<props> = ({setHeight, setWidth}: props) => {
    const state = useAppSelector(state => state.store.currentImage)
    const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement,Event>) => {
      setWidth(e.currentTarget.width);
      setHeight(e.currentTarget.height);

    }
    return (
        <div className={cl.Viewer}>
            <div className={cl.ViewerWindow + " droppable"}>
                {state.id ?
                    <img src={state.src} onLoad={handleImageLoad} alt={state.title}/>
                    : ''
                }
            </div>
        </div>
    );
};

export default Viewer;
