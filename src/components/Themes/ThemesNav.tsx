import React from 'react';
import cl from '../../styles/Themes/ThemesNav.module.css';

interface props {
    setNav: React.Dispatch<React.SetStateAction<number>>
    selectedNav: number
}

const listNav = ["Галерея", "Шаблоны", "Фон"]
const ThemesNav: React.FC<props> = ({selectedNav, setNav}: props) => {
    return (
        <div className={cl.ThemesNav}>
            {
                listNav.map((el, idx) => <div key={idx}
                                              onClick={() => {
                                                  setNav(idx);
                                              }}
                                              className={idx == selectedNav ? cl.nav_selected : cl.nav}>{el}</div>)
            }
        </div>
    );
};

export default ThemesNav;
