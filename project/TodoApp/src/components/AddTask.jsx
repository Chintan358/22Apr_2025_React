import { useRef, useState } from "react"
import style from "./AddTask.module.css"
const AddTask = ({adddatahandler})=>{

    // const [task, settask] = useState("")

    // const settaskdata = (e)=>{
    //     settask(e.target.value)
    // }

    var data = useRef()

    const addtodo = (e)=>{

        e.preventDefault()
        adddatahandler(data.current.value)
        data.current.value=""
    }

    return <>
     {/* <input type="text" name="task" id="task" onChange={settaskdata}/> */}
     {/* <button onClick={addtodo}>Add</button> */}
     <form action="" onSubmit={addtodo}>
     <input type="text" name="task" id="task" className={style.input} ref={data}/>
     <button type="submit" className={style.input}>Add</button>
     </form>
    </>
}


export default AddTask
