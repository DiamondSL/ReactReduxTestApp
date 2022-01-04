import { configureStore } from "@reduxjs/toolkit";
import cartIsShownSlice from "./showCartState";
import CartItemsSlice from "./itemsCartState";
import formIsShownSlice from "./showFormState";


const reduxStore = configureStore({reducer: {showCart: cartIsShownSlice.reducer, items: CartItemsSlice.reducer, showForm: formIsShownSlice.reducer}});


export const formIsShownActions = formIsShownSlice.actions;
export const CartItemsActions = CartItemsSlice.actions;
export const cartIsShownActions = cartIsShownSlice.actions;
export default reduxStore;
