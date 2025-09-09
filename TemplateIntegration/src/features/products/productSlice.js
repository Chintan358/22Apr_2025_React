import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const displayProduct = createAsyncThunk("displayProduct", async () => {

    const resp = fetch("https://two2apr-2025-react.onrender.com/products")
    return (await resp).json()

})

export const addProduct = createAsyncThunk("addProduct", async ({ data, token }) => {

    for (let [key, value] of data.entries()) {
        console.log(key, value);
    }

    const resp = fetch("https://two2apr-2025-react.onrender.com/products", {
        method: "POST",
        headers: {

            "authtoken": token
        },
        body: data
    })
    return (await resp).json()

})



export const productslice = createSlice({
    name: 'product',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(displayProduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(displayProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(displayProduct.rejected, (state) => {
            state.isError = true
        })


        builder.addCase(addProduct.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(addProduct.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(addProduct.rejected, (state) => {
            state.isError = true
        })
    }

})




export default productslice.reducer