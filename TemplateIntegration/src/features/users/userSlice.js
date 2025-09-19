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


export const forgotpassword = createAsyncThunk('forgotpassword', async (data) => {



    const resp = await fetch("https://two2apr-2025-react.onrender.com/users/forgot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    return await resp.json()
})


export const resetpassword = createAsyncThunk('resetpassword', async (data) => {



    const resp = await fetch("https://two2apr-2025-react.onrender.com/users/resetpassword", {
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

        builder.addCase(forgotpassword.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(forgotpassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(forgotpassword.rejected, (state, action) => {
            state.isError = true
        })


        builder.addCase(resetpassword.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(resetpassword.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(resetpassword.rejected, (state, action) => {
            state.isError = true
        })


    }

})




export default userSlice.reducer