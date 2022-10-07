import React, {useState} from 'react';

const Categories = () => {
    const [activeIndex, setActiveIndex] = useState(0)

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const changeActiveIndex = (i) => {
        setActiveIndex(i)
    }

    return (<div className="categories">
        <ul>
            {categories.map((e, i) => {
                return <li onClick={() => changeActiveIndex(i)}
                           className={activeIndex === i ? "active" : ''}>
                        {e}
                    </li>
            })}
        </ul>
    </div>);
};

export default Categories;