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





export const orderSlice = createSlice({
    name: 'orders',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {




    }

})




export default orderSlice.reducer