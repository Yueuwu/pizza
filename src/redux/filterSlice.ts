import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./Store";

export interface FilterSliceState {
    categoryId: number,
    sort: number,
    page: number,
    searchValue: string
}

const initialState: FilterSliceState = {
    categoryId: 0,
    sort: 0,
    page: 1,
    searchValue: ''
}

const filterSlice = createSlice({
    name: 'filters',
    initialState,
    reducers: {
        setCategoryId: (state, action: PayloadAction<number>) => {
            state.categoryId = action.payload
        },
        setSort: (state, action: PayloadAction<number>) => {
            state.sort = action.payload
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.page = action.payload
        },
        setSearchValue: (state, action: PayloadAction<string>) => {
            state.searchValue = action.payload
        },
        setFilters: (state, action: PayloadAction<FilterSliceState>) => {
            state.categoryId = action.payload.categoryId
            state.page = action.payload.page
            state.sort = action.payload.sort
            state.searchValue = action.payload.searchValue
        },
        removeFilters: (state) => {
            state.categoryId = 0
            state.page = 1
            state.sort = 0
            state.searchValue = ''
        }
    }
})

export const filterSelector = (state: RootState) => state.filter

export const { setCategoryId, setSort, setPage, setFilters, setSearchValue, removeFilters } = filterSlice.actions

export default filterSlice.reducer