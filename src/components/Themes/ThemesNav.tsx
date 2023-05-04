import React from 'react';
import cl from '../../styles/Themes/ThemesNav.module.css';
import {useAppDispatch, useAppSelector} from "../../hooks";
import {toggleSubpage} from "../../store/slices/storeSlice";



const ThemesNav = () => {
    const listNav = ["Галерея", "Шаблоны", "Фон"]
    const dispatch = useAppDispatch()
    const state = useAppSelector(state => state.store.themesNav)
    return (
        <div className={cl.ThemesNav}>
            {
                listNav.map((el, idx) => <div key={idx}
                                              onClick={() => {

                                                  dispatch(toggleSubpage(idx));

                                              }}
                                              className={idx == state ? cl.nav_selected : cl.nav}>{el}</div>)
            }
        </div>
    );
};

export default ThemesNav;
