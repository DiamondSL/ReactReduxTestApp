import { createSlice } from "@reduxjs/toolkit";

const initialShowCartState = { cartIsShown: false};


const cartIsShownSlice = createSlice({
    name: 'CartIsShown',
    initialState: initialShowCartState,
    reducers: {
        showCart(state) {state.cartIsShown = !state.cartIsShown},
    }

})

export default cartIsShownSlice;