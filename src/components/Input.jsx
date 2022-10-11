import React from 'react';

const Input = ({searchValue, setSearchValue}) => {
    return (
        <div>
            <input onInput={e => setSearchValue(e.target.value)}
                   value={searchValue}
                   placeholder='Поиск пиццы...'/>
            <button onClick={e => setSearchValue('')}>Очистить</button>
        </div>
    );
};

export default Input;