import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { forgotpassword } from "../features/users/userSlice"

export const Forgot = () => {

    const emailref = useRef()
    const dispatch = useDispatch()
    const data = useSelector(state => state.user.data)


    const sendlink = async (e) => {
        e.preventDefault()
        const email = emailref.current.value

        await dispatch(forgotpassword({ email }))
    }

    return <>

        <div className=' w-50 mx-auto my-5' >
            <h1 className=" text-center">Forgot Password recovery !!!</h1>
            <form action="" className=' d-flex gap-3 flex-column mt-4' >

                <div>
                    <input className='form-control' ref={emailref} type="text" placeholder='Enter Your Email' />
                </div>
                <button className='btn btn-primary' onClick={sendlink} >Submit</button>
            </form>
        </div>

    </>
}

