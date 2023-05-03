import React from 'react';
import cl from '../styles/Lists.module.css';
import Pagination from "./ui/Pagination";
import Themes from "./Themes/Themes";

const Lists = () => {
    return (
        <div className={cl.Lists}>
            <Pagination/>
            <Themes/>
        </div>
    );
};

export default Lists;
