import React, {useCallback, useRef, useState} from 'react';
import debounce from 'lodash.debounce'

const Input = ({searchValue, setSearchValue}) => {

    const [value, setValue] = useState('')

    const updateSearchValue = useCallback(
        debounce(
            value => setSearchValue(value),
            600
        ),
        []
    )


    const changeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }

    const inputRef = useRef()
    const clear = () => {
        setSearchValue('')
        setValue('')
        inputRef.current.focus()
    }

    return (
        <div>
            <input
                ref={inputRef}
                autoFocus
                onInput={changeInput}
                value={value}
                placeholder='Поиск пиццы...'/>
            <button onClick={clear}>Очистить</button>
        </div>
    );
};

export default Input;