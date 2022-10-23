import React, {useCallback, useRef, useState} from 'react';
import debounce from 'lodash.debounce'
import {useDispatch} from "react-redux";
import {setSearchValue} from "../redux/filterSlice";

const Search: React.FC = () => {

    const dispatch = useDispatch()

    const inputRef = useRef<HTMLInputElement>(null)

    const [value, setValue] = useState('')

    const updateSearchValue = useCallback(
        debounce(
            value => dispatch(setSearchValue(value)),
            600
        ),
        []
    )


    const changeInput = (e: any) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }



    const clear = () => {
        dispatch(setSearchValue(''))
        setValue('')
        inputRef.current?.focus()

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

export default Search;