import { configureStore } from '@reduxjs/toolkit';
import product from '../features/productSlice.jsx'

const store = configureStore({

    reducer: {

        product

    }

})

export { store }


