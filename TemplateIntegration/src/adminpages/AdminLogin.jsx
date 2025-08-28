import { useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { userLogin } from "../features/users/loginSlice"

const AdminLogin = () => {



    const navigate = useNavigate()

    const dispatch = useDispatch()
    const data1 = useSelector((state) => state.login)

    const email1 = useRef()
    const password1 = useRef()

    const loginHandler = (e) => {
        e.preventDefault()

        const data = {
            email: email1.current.value,
            password: password1.current.value
        }

        dispatch(userLogin(data))
    }

    if (data1.isAuthenticated && data1.role === 'admin') {
        navigate("/dashboard")
    }



    return <main class="main-wrapper">

        <section class="signin-section">
            <div class="container">

                <div class="title-wrapper pt-30">
                    <div class="row align-items-center">


                    </div>

                </div>


                <div class="row">

                    <div class="col-lg-6 mx-auto">
                        <div class="signin-wrapper">
                            <div class="form-wrapper">
                                <h6 class="mb-15">Sign In Form</h6>
                                <p class="text-sm mb-25">

                                </p>
                                <form action="adminlogin" method="post" onSubmit={loginHandler}>
                                    <div class="row">
                                        <div class="col-12">
                                            <div class="input-style-1">
                                                <label>Email</label>
                                                <input type="email" placeholder="Email" ref={email1} name="email" />
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="input-style-1">
                                                <label>Password</label>
                                                <input type="password" placeholder="Password" ref={password1} name="password" />
                                            </div>
                                        </div>



                                        <div class="col-xxl-6 col-lg-12 col-md-6">
                                            <div class="text-start text-md-end text-lg-start text-xxl-end mb-30">
                                                <a href="reset-password.html" class="hover-underline">
                                                    Forgot Password?
                                                </a>
                                            </div>
                                        </div>

                                        <div class="col-12">
                                            <div class="button-group d-flex justify-content-center flex-wrap">
                                                <button class="main-btn primary-btn btn-hover w-100 text-center" type="submit">
                                                    Sign In
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                </form>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </section>

        <footer class="footer">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-6 order-last order-md-first">
                        <div class="copyright text-center text-md-start">
                            <p class="text-sm">
                                Designed and Developed by
                                <a href="https://plainadmin.com" rel="nofollow" target="_blank">
                                    PlainAdmin
                                </a>
                            </p>
                        </div>
                    </div>

                    <div class="col-md-6">
                        <div class="terms d-flex justify-content-center justify-content-md-end">
                            <a href="#0" class="text-sm">Term & Conditions</a>
                            <a href="#0" class="text-sm ml-15">Privacy & Policy</a>
                        </div>
                    </div>
                </div>

            </div>

        </footer>

    </main>
}


export default AdminLogin