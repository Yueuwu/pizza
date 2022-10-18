import { configureStore } from '@reduxjs/toolkit'
import filter from "./filterSlice";
import cart from "./cartSlice";
import pizza from "./pizzaSlice";
import exactPizza from "./exactPizzaSlice";


export const store = configureStore({
    reducer: {
        filter,
        cart,
        pizza,
        exactPizza
    },
})