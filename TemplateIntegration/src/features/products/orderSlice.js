import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'





export const createOrder = createAsyncThunk("createOrder", async (data) => {


    const response = await fetch(`https://two2apr-2025-react.onrender.com/orders/create`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authtoken": data.token
        },
        body: JSON.stringify({ "payid": data.payid })
    })

    return await response.json()

})

export const viewOrder = createAsyncThunk('viewOrder', async (data) => {
    const response = await fetch(`https://two2apr-2025-react.onrender.com/orders`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "authtoken": data.token
        },
    })

    return await response.json()

})





export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(viewOrder.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(viewOrder.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(viewOrder.rejected, (state) => {

            state.isError = true
        })


    }

})




export default orderSlice.reducer