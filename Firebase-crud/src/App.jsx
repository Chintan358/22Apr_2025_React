import { Outlet } from "react-router-dom"
import { Header } from "./components/Header"


const App = () => {

  return <>
    <Header></Header>
    <Outlet></Outlet>
  </>

}

export default App