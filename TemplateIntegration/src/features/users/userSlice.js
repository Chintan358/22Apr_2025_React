import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const useReg = createAsyncThunk('useReg', async (data) => {

    const resp = await fetch("https://two2apr-2025-react.onrender.com/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })



    return await resp.json()

})



export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {

        builder.addCase(useReg.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(useReg.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(useReg.rejected, (state, action) => {
            state.isError = true
        })


    }

})




export default userSlice.reducer