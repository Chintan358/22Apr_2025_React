import { useEffect, useRef } from "react"


const Register = ({addDataHandler,editdata})=>{

    const uname  = useRef()
    const email  = useRef()
    const phone = useRef()

    useEffect(()=>{

        console.log(editdata);
        
        if(editdata)
        {
        uname.current.value=editdata.name
        email.current.value=editdata.email
        phone.current.value=editdata.phone        
        }
    })
   
    const adddata = (e)=>{
        e.preventDefault()
        const data = {
            name : uname.current.value,
            email : email.current.value,
            phone : phone.current.value
        }
        addDataHandler(data)   
        uname.current.value=""
        email.current.value=""
        phone.current.value=""   
    }

    return <>
    
   
       
            <h3>Registration</h3>
        <form onSubmit={adddata}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" ref={uname}  className="form-control" />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text" ref={email} className="form-control" />
            </div>
            <div className="form-group">
                <label>Phone</label>
                <input type="text" ref={phone} className="form-control" />
            </div>
            <br />
            <input type="submit" className="btn btn-success" />
        </form>
       
    
   

    </>
}

export default Register