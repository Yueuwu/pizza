import {calcTotalPrice} from "./calcTotalPrice";

export const getCartLS = () => {
    const data = localStorage.getItem('cart')
    const items = data ? JSON.parse(data) : []
    const totalPrice = calcTotalPrice(items)
    if (items.length){
        return {
            items,
            totalPrice
        }
    } else {
        return {
            items: [],
            totalPrice: 0
        }
    }
}