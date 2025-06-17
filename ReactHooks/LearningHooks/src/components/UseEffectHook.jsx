import { useEffect, useState } from "react"


const UseEffectHook = ()=>{

    const [counter, setcounter] = useState(0)
    const [value, setvalue] = useState(0)

    useEffect(()=>{
        setTimeout(() => {
            setcounter(counter+1)
        }, 2000);
       // console.log("Hello");
        
    },[ ])

    return <>
    <h1>I have reand {counter} times</h1>
    <h2>Value : {value}</h2>
    <button onClick={()=>setvalue(value+1)}>incr</button>
    </>
}

export default UseEffectHook