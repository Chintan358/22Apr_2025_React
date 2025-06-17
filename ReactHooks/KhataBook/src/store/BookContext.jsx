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
            debit :0,
            credit:6000,
        }
    ]
    const [data, setdata] = useState(d1)

    return <BookContext.Provider value={{data}}>
            {props.children }
        </BookContext.Provider>
     

}






export default BookContextProvider