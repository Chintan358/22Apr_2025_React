import { useState } from "react"
import {Title,Para}  from "./Components/Title"
import './App.css'
import { Header } from "./Components/Header"
import StyledCss from "./Components/StyledCss"
const App = ()=>{

    
    const [count, setcount] =   useState(0)
    
    const decrement = ()=>{
      if(count<=0)
        return
      setcount(count-1)
    }
    const increment = ()=>{     
        setcount(count+1)
    }
    return <>
    <Header/>
    <Title /><Para/>
    <button  onClick={decrement} className=""  >-</button>
    <span id="test">{count}</span>
    <button  onClick={increment}>+</button>

    <StyledCss/>
    </>
}
export default App