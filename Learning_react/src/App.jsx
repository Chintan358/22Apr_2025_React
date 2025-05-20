import { useState } from "react"

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
    <button  onClick={decrement} className=""  >-</button>
    <span id="test">{count}</span>
    <button  onClick={increment}>+</button>
    </>
}
export default App