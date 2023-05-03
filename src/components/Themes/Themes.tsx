import React, {useState} from 'react';
import cl from '../../styles/Themes/Themes.module.css';
import ThemesNav from "./ThemesNav";
import ThemesViewer from "./ThemesViewer";

const Themes = () => {
    const [selectedNav, setNav] = useState(0);
    return (
        <div className={cl.Themes}>
            <ThemesNav setNav={setNav} selectedNav={selectedNav}/>
            <ThemesViewer  selectedNav={selectedNav}/>
        </div>
    );
};

export default Themes;
