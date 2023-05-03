import React from 'react';
import cl from '../../styles/ui/Pagination.module.css';

const Pagination = () => {
    return (
        <div className={cl.Pagination}>
            <div className={cl.arrow}>☚</div>
            <div className={cl.pageCounter}>Cтраница 1</div>
            <div className={cl.arrow}>☛</div>
        </div>
    );
};

export default Pagination;
