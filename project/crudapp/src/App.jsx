import { useState } from "react"
import Details from "./components/Details"
import Reg from "./components/Reg"

const App =()=>{

  const [userdata, setuserdata] = useState([])
  const [edituser, setedituser] = useState()
  const adduser = (data)=>{

      const duplicate =  userdata.find(ele=>ele.id==data.id)
     
      
      if(duplicate)
      {
        const existdata = userdata.filter(ele=>ele.id!=data.id)
        setuserdata([...existdata,data])
      }
      else{
        setuserdata([...userdata,data])
      }

      
     
  }
  const deleteuser = (id)=>{
    setuserdata(userdata.filter(ele=>ele.id!=id))
  }

  const updateuser = (id)=>{
    setedituser(userdata.find(ele=>ele.id==id))
  }

   return <>
      <div className="container">
        <div className="row">
        <Reg adduser={adduser} edituser={edituser}/>
        <div className="col-1"></div>
        <Details userdata={userdata} updateuser={updateuser} deleteuser={deleteuser}/>
        </div>
      </div>
   </>
}

export default App