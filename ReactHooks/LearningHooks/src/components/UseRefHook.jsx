import { useEffect, useRef, useState } from "react"

const UseRefHook = ()=>{


    // const [value , setvalue] = useState(0)
    // const count = useRef(0)
    // useEffect(()=>{
    //     console.log("Hello"); 
    //     count.current = count.current+1
    // })
    // return <>
    //     <h1>{value}</h1>
    //     <button  onClick={()=>setvalue(value+1)}>Incr</button>
    //     <h1>Counter : {count.current}</h1>
    // </>

    const [uname, setuname] = useState()

   
    const getData = (e)=>{
       e.preventDefault()
       console.log(e.target[0].value);
       console.log(e.target[1].value);
    }


    useEffect(()=>{
        console.log("rendring");        
    })

    return <>
        <form action="" onSubmit={getData}>
        <input type="text" name="uname"/>
        <br />
        <input type="text" name="email"/>
        <br />
        <input type="submit" />
        </form>
    </>


}

export default UseRefHook