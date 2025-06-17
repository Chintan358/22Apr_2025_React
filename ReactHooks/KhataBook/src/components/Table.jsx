import { useContext, useRef, useState } from "react"
import { BookContext } from "../store/BookContext"
import { Records } from "./Records"


export const Table = ()=>{


    const {data} = useContext(BookContext)
    
    var cb = 0;
    
    return <>
    <div className="col-1"></div>
      <div className="col-7 p-3 card">
            <h2 align="center">PassBook</h2>
            <hr />
                <table className="table table-bordered">
                  <tr>
                      <th>Id</th>
                      <th>Date</th>
                      <th>Name</th>
                      <th>Debit</th>
                      <th>Credit</th>
                      <th>Current Balance</th>
                  </tr>
                    
                    {
                    data.map((ele)=>{
                        
                        cb += (ele.credit-ele.debit)
                        console.log(cb);

                       return <Records key={ele.id} ele={ele} cb={cb}></Records>
                    
                    })}
                </table>
          </div>
    </>
}