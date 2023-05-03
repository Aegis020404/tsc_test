import React from 'react';
import cl from '../../styles/ui/Burger.module.css';

const burger = () => {
    return (
        <div className={cl.Burger}>
            <div className={cl.point}/>
            <div className={cl.point}/>
            <div className={cl.point}/>
        </div>
    );
};

export default burger;
