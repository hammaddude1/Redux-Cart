import { REMOVE, CLEAR, INCREASE, DECREASE, TOTAL } from "./action"
import cartItems from "./cart-items";

const initialStore = {
    cart: cartItems,
    amount: 0,
    total: 0
}

export default function reducer(state = initialStore, action) {

    if (action.type === CLEAR) {
        return ({
            ...state, cart: []
        })
    }

    if (action.type === REMOVE) {
        return ({
            ...state, cart: state.cart.filter((item) => item.id !== action.payload.id)
        })
    }

    if (action.type === INCREASE) {
        let tempCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                item = { ...item, amount: item.amount + 1 }
            }
            return item;;
        })

        return ({ ...state, cart: tempCart })
    }

    if (action.type === DECREASE) {
        let tempCart = state.cart.map(item => {
            if (item.id === action.payload.id) {
                item = { ...item, amount: item.amount - 1 }
            }
            return item;;
        })

        return ({ ...state, cart: tempCart })
    }

    if (action.type === TOTAL) {
        let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {

            const { price, amount } = cartItem;

            const itemTotal = price * amount;

            cartTotal.total += itemTotal
            cartTotal.amount += amount

            return cartTotal;
        },
            {
                amount: 0,
                total: 0
            }
        )
        total = parseFloat((total).toFixed(2))
        return { ...state, total, amount }
    }


    return state;

}