import React from 'react';
import cl from '../../styles/Themes/ThemesNav.module.css';

const ThemesNav = () => {
    return (
        <div className={cl.ThemesNav}>
            <div className={cl.nav_selected}>Галерея</div>
            <div className={cl.nav}>Шаблоны</div>
            <div className={cl.nav}>Фон</div>
        </div>
    );
};

export default ThemesNav;
