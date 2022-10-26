import {CartItem} from "../redux/cartSlice";


export const calcTotalPrice = (items: CartItem[]) => {
    return items.reduce((sum, el) => {
        return (el.price * el.count) + sum
    }, 0)
}