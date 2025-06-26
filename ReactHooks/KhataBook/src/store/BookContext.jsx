import { createContext, useState } from "react";


export const BookContext = createContext()


const BookContextProvider = (props)=>{


    const d1 = [
        {
            id : 1,
            date:1,
            name:"xyz",
            debit :0,
            credit:5000,
        },
        {
            id : 2,
            date:1,
            name:"abc",
            debit :2000,
            credit:0,
        },
        {
            id : 3,
            date:1,
            name:"adffdbc",
            debit :2000,
            credit:0,
        },
        {
            id : 4,
            date:1,
            name:"adffdbc",
            debit :6000,
            credit:0,
        }
    ]
    const [data, setdata] = useState([])

    const addData = (datatosave)=>{
        
            if(datatosave.credit==0)
            {
                var currentbalance = 0
                data.map(ele=>{
                    currentbalance+=ele.credit-ele.debit
                })
                
                if(datatosave.debit>currentbalance)
                {
                   return alert("bas kar!!!")
                }    

            }
            setdata([...data,datatosave])
           
       
       
        
    }

    return <BookContext.Provider value={{data,addData}}>
            {props.children }
        </BookContext.Provider>
     

}






export default BookContextProvider