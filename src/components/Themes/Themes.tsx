import React from 'react';
import cl from '../../styles/Themes/Themes.module.css';
import ThemesNav from "./ThemesNav";
import ThemesViewer from "./ThemesViewer";

const Themes = () => {
    return (
        <div className={cl.Themes}>
            <ThemesNav />
            <ThemesViewer />
        </div>
    );
};

export default Themes;
