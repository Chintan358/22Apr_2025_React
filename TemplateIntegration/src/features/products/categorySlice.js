import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'


export const displayCategory = createAsyncThunk("displayCategory", async () => {

    const resp = fetch("https://two2apr-2025-react.onrender.com/categories")
    return (await resp).json()

})

export const addCategory = createAsyncThunk("addCategory", async (data) => {

    const resp = fetch("https://two2apr-2025-react.onrender.com/categories",
        {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "authtoken": data.token
            },
            body: JSON.stringify(data)
        }
    )
    return (await resp).json()

})



export const categorySlice = createSlice({
    name: 'category',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(displayCategory.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(displayCategory.fulfilled, (state, action) => {
            state.isLoading = false
            state.data = action.payload
        })

        builder.addCase(displayCategory.rejected, (state) => {
            state.isError = true
        })
    }

})




export default categorySlice.reducer