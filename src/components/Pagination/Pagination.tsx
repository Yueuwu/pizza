import React from 'react';
import style from './pagination.module.css'

type PaginationProps = {
    page: number,
    changePage: (i: number) => void
}

const Pagination: React.FC<PaginationProps> = ({page, changePage}) => {
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
            <div className={style.pointer} onClick={decPage}>{'<'}</div>
            {
                [...new Array(3)].map( (_, i) =>
                    <div key={i} className={page === i+1 ? style.active : style.normal} onClick={() => changePage(i + 1)}>{i + 1}</div>
                )
            }
            <div className={style.pointer} onClick={incPage}>{'>'}</div>
        </div>
    );
};

export default Pagination;