import { useContext } from "react"
import { MyContext } from "../context/MyContext"


const Footer = ()=>{

    const {email} =  useContext(MyContext)

    return <><h1>Footer

    </h1>
    <h2>Email : {email}</h2>
    </>
}

export default Footer

