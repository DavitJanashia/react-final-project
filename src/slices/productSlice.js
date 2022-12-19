import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import productService from "../services/productService";


const initialState = {
    value: [],
    loading: false,
    queryfilter: ''
}

export const getProducts = createAsyncThunk(
    'product/query',
    async (queryfilter) => {
        try {
            const {getProds} = productService()
            return await getProds("/products?q=" + queryfilter)
        } catch (error) {
            throw Error();
        }
    }
)

export const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers: {
        queryfilter: (state, action) => {
            state.queryfilter = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getProducts.pending, (state) => {
            state.loading = true;
        })
        builder.addCase(getProducts.fulfilled, (state, action) => {
            state.value = action.payload
            state.loading = false;
        })
        builder.addCase(getProducts.rejected, (state) => {
            state.value = [];
            state.loading = false;
        })
    }
})


export const { queryfilter } = productSlice.actions;

export default productSlice.reducer

export const selectProduct = state => state.product
