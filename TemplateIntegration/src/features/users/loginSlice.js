import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk('userLogin', async (data) => {


    const response = await fetch("https://fakestoreapi.com/auth/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)

        })


    return (await response).json()
})


export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        token: null,
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.token


        })

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isError = true


        })

    }
})





export default loginSlice.reducer