import React from 'react';

type CategoriesProps = {
    value: number,
    onChangeCategory: (i: number)=>void
}

const Categories: React.FC<CategoriesProps> = React.memo(({value, onChangeCategory}) => {

    const categories = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']

    const changeActiveIndex = (i: number) => {
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
});

export default Categories;