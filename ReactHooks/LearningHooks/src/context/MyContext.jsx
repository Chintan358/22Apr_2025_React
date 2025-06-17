import { createContext } from "react";


export const MyContext = createContext()

const ContextProvider = (props)=>{

        const phone = "58585749685"
        const email = "test@gmail.com"
       return <MyContext.Provider value={{phone,email}}>
            {props.children}
       </MyContext.Provider>
        
}

export default ContextProvider