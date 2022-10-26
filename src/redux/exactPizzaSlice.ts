import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {RootState} from "./Store";


export const fetchExactPizza = createAsyncThunk('pizza/fetchPizza',
    async ({id}: {id: string }) => {
        const {data} = await axios.get<Pizza>(`https://63425208ba4478d4783a7215.mockapi.io/items/${id}`)
        return data
    }
)

type Pizza = {
    id: string,
    title: string,
    price: number,
    imageUrl: string,
    types: number[],
    sizes: number[],
    rating: number
}

export enum Status {
    PENDING = 'pending',
    SUCCESS = 'success',
    ERROR = 'error'
}

interface PizzaSliceState {
    status: Status,
    item: Pizza
}

const initialState: PizzaSliceState = {
    item: {
        id: '',
        title: '',
        price: 0,
        imageUrl: '',
        types: [],
        sizes: [],
        rating: 0
    },
    status: Status.PENDING,
}

const exactPizzaSlice = createSlice({
    name: 'exactPizza',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder.addCase(fetchExactPizza.pending, (state) => {
            state.status = Status.PENDING
            state.item = {
                id: '',
                title: '',
                price: 0,
                imageUrl: '',
                types: [],
                sizes: [],
                rating: 0
            }
        })
        builder.addCase(fetchExactPizza.fulfilled, (state, action) => {
            state.status = Status.SUCCESS
            state.item = action.payload
        })
        builder.addCase(fetchExactPizza.rejected, (state, action) => {
            state.status = Status.ERROR
            state.item = {
                id: '',
                title: '',
                price: 0,
                imageUrl: '',
                types: [],
                sizes: [],
                rating: 0
            }
            console.log(action.payload)
        })
    }
   /* extraReducers: {
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
    }*/
})

export const exactPizzaSelector = (state: RootState) => state.exactPizza

export default exactPizzaSlice.reducer
