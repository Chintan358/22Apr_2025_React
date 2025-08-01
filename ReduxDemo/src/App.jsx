import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from './features/counter/counterSlice'
import { addtodo } from './features/counter/todoSlice'

function App() {

  const count = useSelector((state)=>state.counter.value)
  const todo = useSelector((state)=>state.todo)

 
  
  const dispatch = useDispatch()
  
  const incHandler = ()=>{
    dispatch(increment())
  }

  const decHandler = ()=>{
    dispatch(decrement())
  }

  const resetHandler = ()=>{
    dispatch(reset())
  }

  const incByAmt = (value)=>{
    
    if(!isNaN(value))
    {
      console.log("y");
      
    dispatch(incrementByAmount(value))
    }
    else{

      console.log("N");
      
      dispatch(addtodo(value))
    }
    

  }


  return (
    <>
      
      <div className="card">
        <input type="text" onBlur={(e)=>incByAmt(e.target.value)} />
        <br />
        <button onClick={()=>dispatch(increment())} >+</button>
          count is {count}
         <button onClick={decHandler}>-</button>
         <br />
         <button onClick={resetHandler}>Reset</button>
      </div>

      <div>
        <h1>TODO</h1>
        <ul>
          {todo.map(ele=><li>{ele}</li>)}
        </ul>
      </div>

    
    </>
  )
}

export default App
