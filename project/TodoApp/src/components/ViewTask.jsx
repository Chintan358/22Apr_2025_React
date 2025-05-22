import TaskList from "./TaskList"

const ViewTask = ({tasks,deletedata })=>{

    
    

    return <>
    <table>

     {tasks.map(ele=><TaskList key={ele} data={ele} deletedata={deletedata}></TaskList>)}   
   

  </table>
    </>
}

export default ViewTask