
const Home = ({userdata,deleteDataHandler,editDataHandler})=>{
    return <>
        <h1>Home</h1>
        <table className="table" >
            <thead>
            <tr>
                <th>User Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Action</th>
            </tr>
            </thead>
            <tbody>
            {userdata.map(ele=> <tr>
                <td>{ele.name}</td>
                <td>{ele.email}</td>
                <td>{ele.phone}</td>
                <td><button className="btn btn-danger" onClick={()=>deleteDataHandler(ele.name)}>Delete</button></td>
                <td><button className="btn btn-primary" onClick={()=>editDataHandler(ele.name)}>Edit</button></td>
         
            </tr>)}
            </tbody>
        </table>
    </>
}

export default Home