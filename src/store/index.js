import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: (() => {
        try {
            return JSON.parse(localStorage.getItem("cart")) || [];
        } catch (error) {
            console.error("Failed to parse cart from localStorage:", error);
            return [];
        }
    })(),
    search: JSON.parse(localStorage.getItem("result")) || [],
    history: JSON.parse(localStorage.getItem("history")) || [],
    favourite: JSON.parse(localStorage.getItem("favourite")) || []
};

const cartSlice = createSlice({
    name: "Shopping",
    initialState,
    reducers: {
        addToCart(state, action) {
            const existArr = state.cart.find((c) => c._id === action.payload._id);

            if (existArr) {
                alert("You added this product before");
                return;
            }

            alert("Product added to your cart");

            state.cart.unshift(action.payload);
            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeItem(state, action) {
            state.cart = state.cart.filter((item) => item._id !== action.payload);

            localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        searchResult(state, action) {
            state.search = action.payload

            localStorage.setItem("result", JSON.stringify(state.search))
        },
        saveHistory(state, action) {
            if (state.history.find(c => c.title === action.payload)) {
                return
            }

            state.history.unshift({ title: action.payload })

            localStorage.setItem("history", JSON.stringify(state.history))
        },
    },
});

export const CART = configureStore({
    reducer: cartSlice.reducer,
});

export const { addToCart, removeItem, searchResult, saveHistory } = cartSlice.actions;
