
import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Slice/BookSlice"


const store= configureStore({ 

    reducer:{
        cartItems:bookReducer,
    }
})

export default store;