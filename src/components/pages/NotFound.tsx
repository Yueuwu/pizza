import React from 'react';
import {Link} from "react-router-dom";

const NotFound: React.FC = () => {
    return (
        <div>
            Ничего не найдено
            <Link to='/'>
                <h1>На главную</h1>
            </Link>
        </div>
    );
};

export default NotFound;