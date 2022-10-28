import React from 'react';
import style from './style.module.css'

const Loader: React.FC = () => {
    return (
        <div className={style.ldsRoller}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default Loader;