
const TaskList = ({data,deletedata})=>{

    return <>
    <tr><th>{data}  <button onClick={()=>deletedata(data)}>X</button></th></tr>
    </>
}

export default TaskList