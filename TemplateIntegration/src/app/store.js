import { configureStore } from '@reduxjs/toolkit'
import productreducer from '../features/products/productSlice'
import loginreducer from '../features/users/loginSlice'

export const store = configureStore({
    reducer: {
        product: productreducer,
        login: loginreducer
    },
})