import { configureStore } from '@reduxjs/toolkit'
import filter from "./filterSlice";
import pagination from "./paginationSlice";

export const store = configureStore({
    reducer: {
        filter,
        pagination
    },
})