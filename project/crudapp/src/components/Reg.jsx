import { useEffect, useRef } from "react"

const Reg = ({adduser,edituser})=>{

    const uname = useRef()
    const email = useRef()
    const age = useRef()

    useEffect(()=>{
        if(edituser)
        {
            uname.current.value=edituser.name
            email.current.value=edituser.email
            age.current.value=edituser.age
        }
    })

    const addUserHandler = (e)=>{
        e.preventDefault()

        var id;
        if(edituser)
        {
            id = edituser.id 
        }
        else{
            id = Math.floor(Math.random() * 100000 )
        }
        adduser({
            id : id,
            name:uname.current.value,
            email:email.current.value,
            age :age.current.value
        })

        uname.current.value=""
        email.current.value=""
        age.current.value=""

    }


    return <>
     <div className="col-5 card p-3 mt-3">
            <h2>User Registration</h2>
            <hr />
            <form action="" onSubmit={addUserHandler}>
              <div className="form-group">
                <label htmlFor="uname">Username</label>
                <input type="text" ref={uname} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" ref={email} className="form-control" />
              </div>
              <div className="form-group">
                <label htmlFor="age">Age</label>
                <input type="text" ref={age} className="form-control" />
              </div>
<br />
              <input type="submit" className="btn btn-success" />
            </form>
          </div>
    </>
}

export default Reg