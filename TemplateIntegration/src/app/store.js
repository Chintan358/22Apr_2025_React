import { configureStore } from '@reduxjs/toolkit'
import productreducer from '../features/products/productSlice'
import loginreducer from '../features/users/loginSlice'
import userreducer from '../features/users/userSlice'
import categoryreducer from '../features/products/categorySlice'
import cartreducer from '../features/products/cartSlice'

export const store = configureStore({
    reducer: {
        product: productreducer,
        login: loginreducer,
        user: userreducer,
        category: categoryreducer,
        cart: cartreducer
    },
})