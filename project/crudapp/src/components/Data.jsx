
const Data = ({ele,index,deleteuser,updateuser})=>{
    return <>
        <tr>
            <td>{index+1}</td>
            <td>{ele.name}</td>
            <td>{ele.email}</td>
            <td>{ele.age}</td>
            <td><button className="btn btn-primary" onClick={()=>updateuser(ele.id)} >Update</button></td>
            <td><button className="btn btn-danger" onClick={()=>deleteuser(ele.id)}>Delete</button></td>
            
        </tr>
    </>
}

export default Data