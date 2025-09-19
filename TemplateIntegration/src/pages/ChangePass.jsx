import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom'
import { resetpassword } from '../features/users/userSlice';

export const ChangePass = () => {


    const location = useLocation()
    const token = location.search;
    const tk = token.substring(token.indexOf('=') + 1)
    const cdata = useSelector(state => state.user.data)
    const dispatch = useDispatch()

    const passref = useRef()
    const cpassref = useRef()

    const validation = (e) => {
        e.preventDefault()

        const pass = passref.current.value
        const cpass = cpassref.current.value
        if (pass == null || pass == "") {
            alert("password can not be blank")
        }
        else if (pass !== cpass) {
            alert("password and cpass must be same")
        }
        else {

            const data = {
                token: tk,
                pass: pass
            }

            dispatch(resetpassword(data))

            console.log(cdata)


        }



    }

    return (
        <>
            <div className=' w-50 mx-auto my-5' >
                <form action="" className=' d-flex gap-3 flex-column' onSubmit={validation}>
                    <div>
                        <input className='form-control' ref={passref} id='pass' type="text" placeholder='Enter Your New Password' />
                    </div>
                    <div>
                        <input className='form-control' ref={cpassref} id='cpass' type="text" placeholder='Enter Your New Confirm Password' />
                    </div>
                    <button className='btn btn-primary' >Submit</button>
                </form>
            </div>
        </>
    )
}


