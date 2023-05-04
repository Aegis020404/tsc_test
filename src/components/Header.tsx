import React from 'react';
import cl from '../styles/Header.module.css';
import Burger from "./ui/Burger";
import bookIMG from "../assets/imgs/book.png";
import {useAppSelector} from "../hooks";
interface props {
    width: number |undefined;
    height:number| undefined;
}
const Header:React.FC<props> = ({width,height}:props) => {
    const title = useAppSelector(state=> state.store.currentImage.title)
    return (
        <div className={cl.Header}>
            <div className={cl.topHeader}>
                <div className={cl.titles}>
                    <div className={cl.title}>{title ? title : "Мой проект"}</div>
                    <div className={cl.subtitle}>Размер {width}x{height} <br/> мм (в развороте)</div>
                </div>
                <div className={cl.leftPanel}>
                    <a target="_blank" href="https://wow2print.com/"  className={cl.btnBlack}>В корзину</a>
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