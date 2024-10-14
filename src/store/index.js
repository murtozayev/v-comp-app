import { configureStore, createSlice } from "@reduxjs/toolkit"
const initialState = {
    cart: JSON.parse(localStorage.getItem("cart")) || []
}


const cartSlice = createSlice({
    name: "Shopping",
    initialState: initialState,
    reducers: {
        addToCart(state, action) {
            const product = action.payload;

            const existingProduct = state.cart.find(item => item.id === product.id);

            if (existingProduct) {

                return

            } else {

                state.cart.push(product);

            }

            localStorage.setItem("cart", JSON.stringify(state.cart));
        }

    }
})

export const CART = configureStore({
    reducer: cartSlice.reducer
})

export const { addToCart } = cartSlice.actions