import React, {Dispatch, SetStateAction} from 'react';
import cl from "../../styles/ui/ModalProductAdd.module.css"
interface props {
    setModalSuccessAdded: Dispatch<SetStateAction<boolean>>
}
const ModalProductAdd:React.FC<props> = ({setModalSuccessAdded}:props) => {
    return (
        <div className={cl.ModalProductAdd}>
            <div className={cl.container}>
                <div className={cl.title}>Продукт успешно добавлен в корзину</div>
                <a target="_blank" href="https://wow2print.com/" className={cl.btn}>Перейти в корзину</a>
            </div>
            <div className={cl.blackScreen} onClick={() => {setModalSuccessAdded(false)}}/>
        </div>
    );
};

export default ModalProductAdd;
