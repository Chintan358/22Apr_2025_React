import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Sidebar from "./Components/Sidebar";
import  "./App.css"
import { useState } from "react";
const App = () => {

  const [selectedTab, setSelectedTab] = useState("home")
  const [userdata, setuserdata] = useState([])
  const [editdata , seteditData] = useState()

  const addDataHandler = (data)=>{
      
      const duplicate =  userdata.find(ele=>ele.name==data.name)
      if(duplicate==undefined)
      {
        setuserdata([...userdata,data])

      }
      else{

       const newdata =   userdata.filter(ele=>ele.name!=duplicate.name)
       setuserdata([...newdata,data])
       seteditData()
      }
      
      setSelectedTab("home")
      
  }

  const deleteDataHandler = (data)=>{
   
    setuserdata(userdata.filter(ele=>ele.name!=data))
    
  }

  const editDataHandler = (data)=>{

      const edata = userdata.find(ele=>ele.name==data)
      seteditData(edata)
      setSelectedTab("register")
  }



  const tabHandler = (tabname)=>{
     setSelectedTab(tabname);
    
  }

  return (
    <>  
    <Header />
    <div className="d-flex" >
      <Sidebar tabHandler={tabHandler} selectedTab={selectedTab}/>
      <div className="m-auto" >
      {selectedTab=='home'?<Home userdata={userdata} deleteDataHandler={deleteDataHandler} editDataHandler={editDataHandler}/>:<Register addDataHandler={addDataHandler} editdata={editdata}/>}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;