import { createSlice } from "@reduxjs/toolkit";
import productType from "../../interface/product";

const initial :productType[] = []

const cartSlice = createSlice({
    name: 'cart',
    initialState:initial,
    reducers: {
        addToCart:(state,action)=>{
            state.push(action.payload)
        }
    }, 
    
})

export const { addToCart} = cartSlice.actions
export default cartSlice.reducer