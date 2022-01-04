import { createSlice } from "@reduxjs/toolkit";

const initialShowFormState = { FormIsShown: false};


const formIsShownSlice = createSlice({
    name: 'FormIsShown',
    initialState: initialShowFormState,
    reducers: {
        showForm(state) {state.FormIsShown = !state.FormIsShown},
    }

})

export default formIsShownSlice;