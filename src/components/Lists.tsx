import React from 'react';
import cl from '../styles/Lists.module.css';
import Pagination from "./ui/Pagination";

const Lists = () => {
    return (
        <div className={cl.Lists}>
            <Pagination/>
        </div>
    );
};

export default Lists;
