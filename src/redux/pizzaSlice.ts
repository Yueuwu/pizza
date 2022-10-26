import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "./Store";

export type SearchPizzaParams = {
    pageis: string,
    category: string,
    sort: string,
    searchValue: string,
}

export const fetchPizzas = createAsyncThunk('pizza/fetchPizzas',
    async ({pageis, category, sort, searchValue}: SearchPizzaParams) => {
        const {data} = await axios.get<PizzaItem[]>(`https://63425208ba4478d4783a7215.mockapi.io/items?${pageis}${category}&sortBy=${
            sort}&order=${sort === 'title' ? 'asc' : 'desc'}&search=${searchValue}`)

        return data
    }
)

type PizzaItem = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: number[],
    sizes: number[],
    rating: number
}

interface PizzaSliceState {
    status: 'pending' | 'success' | 'error',
    items: PizzaItem[]
}

const initialState: PizzaSliceState = {
    items: [],
    status: 'pending',
}

const pizzaSlice = createSlice({
    name: 'pizza',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchPizzas.pending, (state) => {
            state.status = 'pending'
            state.items = []
        })
        builder.addCase(fetchPizzas.fulfilled, (state, action) => {
            state.status = 'success'
            state.items = action.payload
        })
        builder.addCase(fetchPizzas.rejected, (state, action) => {
            state.status = 'error'
            state.items = []
            console.log(action.payload)
        })
    }
    /*{
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
    }*/
})

export const pizzaSelector = (state: RootState) => state.pizza

export default pizzaSlice.reducer

