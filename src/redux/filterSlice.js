import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    categoryId: 0,
    sort: 0,
    page: 1
    // sort: {
    //     name: 'популярности',
    //     sortProperty: 'rating'
    // }
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
        setFilters: (state, action) => {
            state.categoryId = Number(action.payload.categoryId)
            state.page = Number(action.payload.page)
            state.sort = action.payload.sort
        }
    }
})

export const { setCategoryId, setSort, setPage, setFilters } = filterSlice.actions

export default filterSlice.reducer