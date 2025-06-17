import UseStateHook from "./components/UseStateHook"
import './App.css'
import UseEffectHook from "./components/UseEffectHook"
import UseRefHook from "./components/UseRefHook"
import UseMemoHook from "./components/UseMemoHook"
import { useCallback, useMemo, useState } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import ContextProvider from "./context/MyContext"
const App = ()=>{

  const [count, setcount] = useState(0)
  const [num, setnum] = useState(2)

  const getdata = useCallback(()=>{},[count])

  
  return <>
      {/* <UseStateHook></UseStateHook> */}
      {/* <UseEffectHook></UseEffectHook> */}
      {/* <UseRefHook></UseRefHook> */}
      {/* <UseMemoHook></UseMemoHook> */}


{/*     
      use callback example
      <Header getdata={getdata}></Header>
      
      <h1>Countr : {count}</h1>
      <button onClick={()=>setcount(count+1)}>Incr</button>

      <h1>Number : {num}</h1>
      <button onClick={()=>setnum(num*num)}>square</button> */}

      <ContextProvider>
       <Header></Header>
       <Footer></Footer>
      </ContextProvider>
      
  </>

}

export default App