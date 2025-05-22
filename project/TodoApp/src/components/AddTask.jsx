import { useRef, useState } from "react"

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
     <input type="text" name="task" id="task" ref={data}/>
     <button type="submit">Add</button>
     </form>
    </>
}


export default AddTask
