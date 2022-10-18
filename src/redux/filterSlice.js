import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    categoryId: 0,
    sort: 0,
    page: 1,
    searchValue: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action) => {
            state.categoryId = action.payload
        },
        setSort: (state, action) => {
            state.sort = action.payload
        },
        setPage: (state, action) => {
            state.page = action.payload
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setFilters: (state, action) => {
            state.categoryId = Number(action.payload.categoryId)
            state.page = Number(action.payload.page)
            state.sort = action.payload.sort
            state.searchValue = action.payload
        }
    }
})

export const { setCategoryId, setSort, setPage, setFilters, setSearchValue } = filterSlice.actions

export default filterSlice.reducer