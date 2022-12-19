import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import categoryService from "../services/categoryService";

const initialState = {
    value: [],
    loading: false
}

export const getCategories = createAsyncThunk(
    'category/count',
    async () => {
        try {
            const {getCategories} = categoryService()
            return await getCategories("/categories")
        } catch (error) {
            throw Error();
        }
    }
)

export const categorySlice = createSlice({
    name: 'category',
    initialState,
    extraReducers: (builder) => {
        builder.addCase(getCategories.fulfilled, (state, action) => {
            state.value = action.payload
        })
        builder.addCase(getCategories.rejected, (state) => {
            state.value = [];
        })
    }
})


export default categorySlice.reducer

export const selectCategory = state => state.category 
