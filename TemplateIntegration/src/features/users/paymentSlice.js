import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const payment = createAsyncThunk('payment', async (data) => {

    const resp = await fetch(`https://two2apr-2025-react.onrender.com/payment?amount=${data}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })



    return await resp.json()

})



export const paymentSlice = createSlice({
    name: 'payment',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(payment.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(payment.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
            console.log(state.data);

        })

        builder.addCase(payment.rejected, (state, action) => {
            state.isError = true
        })


    }

})




export default paymentSlice.reducer