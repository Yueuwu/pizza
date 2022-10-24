import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "./Store";

export type CartItem = {
    id: string,
    title: string,
    price: number,
    img: string,
    type: string,
    size: number,
    count: number
}

interface CartSliceState {
    totalPrice: number,
    items: CartItem[]
}

const initialState: CartSliceState = {
    items: [],
    totalPrice: 0
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(obj =>
                obj.id === action.payload.id &&
                obj.type === action.payload.type &&
                obj.size === action.payload.size)
            if(findItem){
                findItem.count ++
            } else {
                state.items.push({
                    ...action.payload,
                    count: 1
                })
            }
            state.totalPrice = state.items.reduce((sum, el) => {
                return (el.price * el.count) + sum
            }, 0)
        },
        deleteItem: (state, action: PayloadAction<CartItem>) => {
            const findItem = state.items.find(obj => obj.id === action.payload.id &&
                    obj.type === action.payload.type &&
                    obj.size === action.payload.size
            )

            if(findItem){
                if (findItem.count > 1){
                    findItem.count --
                }
                else {
                    state.items = state.items.filter(obj =>{
                        return obj.id !== action.payload.id ||
                            obj.type !== action.payload.type ||
                            obj.size !== action.payload.size
                    })
                }
            }
            state.totalPrice = state.items.reduce((sum, el) => {
                return (el.price * el.count) + sum
            }, 0)
        },
        removeItem: (state, action: PayloadAction<CartItem>) => {
            state.items = state.items.filter(obj =>{
                return obj.id !== action.payload.id ||
                    obj.type !== action.payload.type ||
                    obj.size !== action.payload.size
            })
            state.totalPrice = state.items.reduce((sum, el) => {
                return (el.price * el.count) + sum
            }, 0)
        },
        clearItems: (state) => {
            state.items = []
            state.totalPrice = 0
        }
    }
})

export const cartSelector = (state: RootState) => state.cart

export const { addItem, clearItems, removeItem, deleteItem } = cartSlice.actions

export default cartSlice.reducer

