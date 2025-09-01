import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const userLogin = createAsyncThunk('userLogin', async (data, { rejectWithValue }) => {


    const response = await fetch("https://two2apr-2025-react.onrender.com/users/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",

            },
            body: JSON.stringify(data)
        })



    return await response.json()

})

const token = localStorage.getItem("token");
const role = localStorage.getItem("role")
export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        token: token ? token : null,
        isError: false,
        isAuthenticated: !!token,
        success: null,
        error: null,
        role: role ? role : null
        // statusCode: null

    },
    reducers: {
        logout: (state) => {

            state.token = null,
                state.isAuthenticated = false
            localStorage.removeItem("token")
        }
    },
    extraReducers: (builder) => {

        builder.addCase(userLogin.pending, (state) => {
            state.isLoading = true
        })

        builder.addCase(userLogin.fulfilled, (state, action) => {
            state.isLoading = false
            state.token = action.payload.authtoken
            state.role = action.payload.role

            if (action.payload.error) {
                state.isAuthenticated = false
                state.error = "something went Wrong !!!"
            }
            else {
                state.isAuthenticated = true
                localStorage.setItem("token", action.payload.authtoken)
                localStorage.setItem("role", action.payload.role)
            }
            state.success = "Login success"

        })

        builder.addCase(userLogin.rejected, (state, action) => {
            state.isError = true
            state.error = "something went Wrong----dfdfd     !!!"
            state.isAuthenticated = false

        })

    }
})


export const { logout } = loginSlice.actions
export default loginSlice.reducer