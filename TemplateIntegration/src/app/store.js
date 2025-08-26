import { configureStore } from '@reduxjs/toolkit'
import productreducer from '../features/products/productSlice'
import loginreducer from '../features/users/loginSlice'
import userreducer from '../features/users/userSlice'
import categoryreducer from '../features/products/categorySlice'
import cartreducer from '../features/products/cartSlice'
import paymentreducer from '../features/users/paymentSlice'
import orderreducer from '../features/products/orderSlice'

export const store = configureStore({
    reducer: {
        product: productreducer,
        login: loginreducer,
        user: userreducer,
        category: categoryreducer,
        cart: cartreducer,
        payment: paymentreducer,
        orders: orderreducer
    },
})