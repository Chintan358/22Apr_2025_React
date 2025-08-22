import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const addtoCart = createAsyncThunk("addtoCart", async (data) => {

    const response = await fetch(`https://two2apr-2025-react.onrender.com/carts/${data.pid}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authtoken": data.token
        }
    })

    return await response.json()
})

export const viewCart = createAsyncThunk("viewCart", async (data) => {
    const response = await fetch(`https://two2apr-2025-react.onrender.com/carts`, {
        headers: {
            "authtoken": data.token
        }
    })

    return await response.json()
})

export const updateCart = createAsyncThunk("updateCart", async (data) => {


    const response = await fetch(`https://two2apr-2025-react.onrender.com/carts/${data.cid}?qty=${data.qty}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "authtoken": data.token
        }
    })

    return await response.json()

})

export const removeCart = createAsyncThunk("removeCart", async (data) => {

    const response = await fetch(`https://two2apr-2025-react.onrender.com/carts/${data.cid}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "authtoken": data.token
        }
    })

    return await response.json()

})



export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        isLoading: false,
        data: [],
        isError: false
    },
    extraReducers: (builder) => {
        builder.addCase(addtoCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(addtoCart.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(addtoCart.rejected, (state) => {
            state.isError = true
        })


        builder.addCase(viewCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(viewCart.fulfilled, (state, action) => {
            state.isLoading = false


            state.data = action.payload
        })
        builder.addCase(viewCart.rejected, (state) => {
            state.isError = true
            state.data = []
        })


        builder.addCase(removeCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(removeCart.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(removeCart.rejected, (state) => {
            state.isError = true
        })



        builder.addCase(updateCart.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(updateCart.fulfilled, (state, action) => {
            state.isLoading = false
        })
        builder.addCase(updateCart.rejected, (state) => {
            state.isError = true
        })


    }

})




export default cartSlice.reducer