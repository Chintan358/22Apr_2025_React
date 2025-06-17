import { useState } from "react"

const UseStateHook = ()=>{


    // const data = useState()
    // console.log(data[0]);
    // console.log(data[1]);

    const [counter,setcounter] = useState(0)
    
    

    return <>
    <h1>USE STATE Hook</h1>
    <button onClick={()=>setcounter(prev=>prev+1)}>+</button>
    {counter}
    <button onClick={()=>setcounter(prev=>prev-1)}>-</button>
   
    </>
}

export default UseStateHook