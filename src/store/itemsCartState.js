import { createSlice } from "@reduxjs/toolkit";

const initialCartItemsState = {items : [{title: 'Test Item 1', quantity: 1, total: 6, price: 6}, {title: 'Test Item 2', quantity: 0, total: 0, price: 10} ] };


const CartItemsSlice = createSlice({
    name: 'CartItems',
    initialState: initialCartItemsState,
    reducers: {
        addNewProduct(state, action){
            let newArray = [...state.items];
            newArray.push(action.payload);
            state.items = newArray;
        },
        addItem(state, action) {
            let newArray = [...state.items];
            let findItem;

             //looking for item that we currently need through comparing title that we passed through payload and item title
            //then we take current item index to work with this element
            //i could add id to every item to make my work easier
            //but it's also was made to show some another way of doing it

            state.items.forEach((item, index) => {
            if(item.title == action.payload)
            {
                findItem = index;
                newArray[index].quantity = item.quantity + 1;
                newArray[index].total = Number(item.price) * Number(item.quantity);
                console.log(newArray[index]);
            }

            return (
            state.items = newArray
            )
    })
},
        removeItem(state, action) { let newArray = [...state.items];
            let findItem;

            state.items.forEach((item, index) => {
            if(item.title == action.payload)
            {
                findItem = index;
                if(item.quantity != 0){
                    //this if/else statement used to prevent negative values 
                newArray[index].quantity = item.quantity - 1;
                newArray[index].total = newArray[index].total - newArray[index].price;
                console.log(newArray[index]);
                }
                else {
                    return
                }
            }

            return (
            state.items = newArray
            )
    })},
    }

})

export default CartItemsSlice;