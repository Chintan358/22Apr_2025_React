import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'





export const userSlice = createSlice({
    name: 'user',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {

    }

})




export default userSlice.reducer