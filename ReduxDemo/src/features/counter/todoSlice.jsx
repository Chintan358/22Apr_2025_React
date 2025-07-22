import {createSlice} from '@reduxjs/toolkit'


export const todoSlice = createSlice({

    name : "todo",
    initialState:["Hello"],
    reducers : {
        addtodo : (state,action)=>{
           
            
           state = state.push(action.payload)
        }
    }

})

export const {addtodo} = todoSlice.actions

export default todoSlice.reducer