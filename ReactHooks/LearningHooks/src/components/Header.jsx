import React, { useContext } from 'react';
import { MyContext } from '../context/MyContext';


const Header = ()=>{

    const {phone,email} =  useContext(MyContext)
    
    
    console.log("header calling....");
    
    return <><h1>Header</h1>
    <h2>Phone : {phone}</h2>
   
    </>
}

export default React.memo(Header)