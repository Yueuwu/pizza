import React, {useState} from 'react';

const Categories = ({value, onChangeCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const changeActiveIndex = (i) => {
        onChangeCategory(i)
    }

    return (<div className="categories">
        <ul>
            {categories.map((e, i) => {
                return <li key={i}
                           onClick={() => changeActiveIndex(i)}
                           className={value === i ? "active" : ''}>
                        {e}
                    </li>
            })}
        </ul>
    </div>);
};

export default Categories;