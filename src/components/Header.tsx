import React from 'react';
import cl from '../styles/Header.module.css';
import Burger from "./ui/Burger";
import bookIMG from "../assets/imgs/book.png";

const Header = () => {
    return (
        <div className={cl.Header}>
            <div className={cl.topHeader}>
                <div className={cl.titles}>
                    <div className={cl.title}>Мой проект</div>
                    <div className={cl.subtitle}>Размер 400x280 <br/> мм (в развороте)</div>
                </div>
                <div className={cl.leftPanel}>
                    <button className={cl.btnBlack}>В корзину</button>
                    <Burger/>
                </div>
            </div>
            <div className={cl.topHeader}>
                <img src={bookIMG} className={cl.bookIMG} width={32} height={30} alt="book icon"/>
            </div>
        </div>
    );
};

export default Header;