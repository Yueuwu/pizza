import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
    async ({pageis, category, sort, searchValue}) => {
        const {data} = await axios.get(`https://63425208ba4478d4783a7215.mockapi.io/items?${pageis}${category}&sortBy=${
            sort}&order=${sort === 'title' ? 'asc' : 'desc'}&search=${searchValue}`)
        return data
    }
)


const initialState = {
    items: [],
    status: 'pending'
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
        /*setItems: (state, action) => {
            state.items = action.payload
        }*/
    },
    extraReducers: {
        [fetchPizzas.pending]: (state) => {
            state.status = 'pending'
            state.items = []
        },
        [fetchPizzas.fulfilled]: (state, action) => {
            state.status = 'success'
            state.items = action.payload
        },
        [fetchPizzas.rejected]: (state, action) => {
            state.status = 'error'
            state.items = []
            console.log(action.payload)
        }
    }
})

export const {  } = pizzaSlice.actions

export default pizzaSlice.reducer

