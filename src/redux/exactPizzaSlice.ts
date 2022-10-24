import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "./Store";

export const fetchExactPizza = createAsyncThunk('pizza/fetchPizza',
    async ({id}) => {
        const {data} = await axios.get(`https://63425208ba4478d4783a7215.mockapi.io/items/${id}`)
        return data
    }
)

const initialState = {
    item: [],
    status: 'pending',
}

const exactPizzaSlice = createSlice({
    name: 'exactPizza',
    initialState,
    reducers: {
    },
    extraReducers: {
        [fetchExactPizza.pending]: (state) => {
            state.status = 'pending'
            state.item = []
        },
        [fetchExactPizza.fulfilled]: (state, action) => {
            state.status = 'success'
            state.item = action.payload
        },
        [fetchExactPizza.rejected]: (state, action) => {
            state.status = 'error'
            state.item = []
            console.log(action.payload)
        }
    }
})

export const exactPizzaSelector = (state: RootState) => state.exactPizza

export default exactPizzaSlice.reducer
