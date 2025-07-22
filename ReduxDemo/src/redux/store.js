import { configureStore } from '@reduxjs/toolkit'
import counter from '../features/counter/counterSlice'
import todo from '../features/counter/todoSlice'

export const store = configureStore({
  reducer: {
    counter,
    todo
  },
})