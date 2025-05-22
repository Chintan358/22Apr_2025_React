import Title from './components/Title'
import AddTask from './components/AddTask'
import ViewTask from './components/ViewTask'
import { useState } from 'react'
const App = ()=>{

  const [a, seta] = useState([])
  const adddata = (data)=>{

      var newtasklist =  [...a,data]
      seta(newtasklist)
  }

  const deletedata = (data)=>{
    
      var newtasklist = a.filter(ele=>{
        return ele!=data
      })
      seta(newtasklist)
    
  }

  return <>
  <Title />
  <AddTask adddatahandler={adddata}/>
  <ViewTask tasks={a} deletedata={deletedata}/> 
  </>
}

export default App