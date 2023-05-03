import React from 'react';
import cl from '../styles/Header.module.css';

const Header = () => {
    return (
        <div className={cl.Header}>
            <div className={cl.topHeader}>
                <div className={cl.titles}>
                    <div className={cl.title}>Мой проект</div>
                    <div className={cl.subtitle}>Размер 400x280 мм в развороте</div>
                </div>
            </div>
        </div>
    );
};

export default Header;