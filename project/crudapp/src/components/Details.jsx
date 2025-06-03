import Data from "./Data"

const Details = ({userdata,deleteuser,updateuser})=>{
    return <>
      <div className="col-6 card p-3 mt-3">
            <h2>User Details</h2>
            <hr />
            <table className="table"> 
            <thead>
              <tr>
                <th>id</th>
                <th>Username</th>
                <th>Email</th>
                <th>Age</th>
                <th colSpan="2">Action</th>
              </tr>
        
            </thead>
            <tbody>
                {userdata.map((ele,index)=><Data key={ele.id} index={index} ele={ele} deleteuser={deleteuser} updateuser={updateuser}/>)}
            </tbody>

            </table>
          </div>
    
    </>
}

export default Details