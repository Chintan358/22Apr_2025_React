import { useMemo, useState } from "react"


const UseMemoHook = ()=>{

    const [num,setnum] = useState(0)
    const [count, setcount] = useState(0)

    const cube = (num)=>{
        console.log("Calculating cube...."); 
        return num*num*num
    }

    const result = useMemo(()=>cube(num),[num])

    return <>
    <input type="text"  onChange={(e)=>setnum(e.target.value)} />
    <h1>Cube : {result}</h1>
    <h1>{count}</h1>
    <button onClick={()=>setcount(count+1)}>Incr</button>
    </>
}

export default UseMemoHook