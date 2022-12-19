import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import cartService from "../services/cartService";

const initialState = {
    value: [],
    loading: "false",
}


export const getCartItems = createAsyncThunk(
    'cart/count',
    async () => {
        try {
            const response = await fetch("http://localhost:4000/cart")
            const data = await response.json()
            return data;
        } catch (error) {
            throw Error();
        }
    }
)

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCartItems.pending, (state, action) => {
            state.loading = "pending";
        })
        builder.addCase(getCartItems.fulfilled, (state, action) => {
            state.value = action.payload
            state.loading = "fulfilled";

        })
        builder.addCase(getCartItems.rejected, (state) => {
            state.value = [];
            state.loading = "rejected";
        })
    }
})



export default cartSlice.reducer

export const selectCart = state => state.cart
