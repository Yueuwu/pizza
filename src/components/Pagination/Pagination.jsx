import React from 'react';
import style from './pagination.module.css'

const Pagination = ({page, changePage}) => {
    const decPage = () => {
        if (page - 1 > 0){
            changePage(page - 1)
        }
    }
    const incPage = () => {
        if (page + 1 < 4){
            changePage(page + 1)
        }
    }
    return (
        <div className={style.wrap}>
            <div onClick={decPage}>{'<'}</div>
            {
                [...new Array(3)].map( (_, i) =>
                    <div className={page === i+1 ? style.active : ''} onClick={() => changePage(i + 1)}>{i + 1}</div>
                )
            }
            <div onClick={incPage}>{'>'}</div>
        </div>
    );
};

export default Pagination;