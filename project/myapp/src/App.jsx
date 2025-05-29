import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Sidebar from "./Components/Sidebar";
import  "./App.css"
import { useState } from "react";
const App = () => {

  const [selectedTab, setSelectedTab] = useState("home")

  return (
    <>  
    <Header />
    <div className="d-flex" >
      <Sidebar/>
      <div className="m-auto" >
      {selectedTab=='home'?<Home/>:<Register/>}
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;