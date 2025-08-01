import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios'


export const displayproduct = createAsyncThunk('displayproduct', async () => {
    // const response = fetch("https://fakestoreapi.com/products")
    // return (await response).json()

    const response =await axios.get("https://fakestoreapi.com/products")
    return response.data

})

const productSlice = createSlice({

    name: "product",
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(displayproduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(displayproduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(displayproduct.rejected, (state) => {
            state.isError = true
        })
    }

})

export const { } = productSlice.actions

export default productSlice.reducer



