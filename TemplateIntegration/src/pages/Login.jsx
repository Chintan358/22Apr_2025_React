import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "../features/users/loginSlice";
import { useReg } from "../features/users/userSlice"
import { Link, useNavigate } from "react-router-dom";


export const Login = () => {

  const navigate = useNavigate()

  const dispatch = useDispatch()
  const data1 = useSelector((state) => state.login)





  const uname = useRef()
  const email = useRef()
  const password = useRef()

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

  const regHandler = (e) => {
    e.preventDefault()

    const data = {
      name: uname.current.value,
      email: email.current.value,
      password: password.current.value,
      role: 'user'
    }

    dispatch(useReg(data))

  }

  // if (data1 != null) {
  //   if (data1.error) {
  //     alert(data1.error)
  //   }
  //   else {



  //     localStorage.setItem("authtoken", JSON.stringify(data1.authtoken))
  //     navigate("/")


  //   }
  // }




  if (data1.isAuthenticated) {
    navigate("/")
  }




  return (
    <>
      <main class="main">
        <section class="breadcrumb">
          <ul class="breadcrumb__list flex container">
            <li>
              <a href="index.html" class="breadcrumb__link">
                Home
              </a>
            </li>
            <li>
              <span class="breadcrumb__link"></span>
            </li>
            <li>
              <span class="breadcrumb__link">Login / Register</span>
            </li>
          </ul>
        </section>

        <section class="login-register section--lg">
          <div class="login-register__container container grid">

            <div class="login">

              <h3 class="section__title">Login</h3>
              <span>  {data1.error}</span>
              <br />
              <form class="form grid" onSubmit={loginHandler}>
                <input
                  type="text"
                  placeholder="Your username"
                  class="form__input"
                  ref={email1}
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  class="form__input"
                  ref={password1}
                />
                <div class="form__btn">
                  <button class="btn" type="submit">Login</button>
                  <Link to="/forgot">Forgot Password ?</Link>
                </div>
              </form>
            </div>
            <div class="register">
              <h3 class="section__title">Create an Account</h3>
              <form class="form grid" onSubmit={regHandler}>
                <input type="text" placeholder="Username" ref={uname} class="form__input" />
                <input
                  type="email"
                  placeholder="Your Email"
                  class="form__input"
                  ref={email}
                />
                <input
                  type="password"
                  placeholder="Your Password"
                  class="form__input"
                  ref={password}
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  class="form__input"
                />
                <div class="form__btn">
                  <button class="btn">Submit & Register</button>
                </div>
              </form>
            </div>
          </div>
        </section>

        <section class="newsletter section">
          <div class="newsletter__container container grid">
            <h3 class="newsletter__title flex">
              <img
                src="./assets/img/icon-email.svg"
                alt=""
                class="newsletter__icon"
              />
              Sign in to Newsletter
            </h3>
            <p class="newsletter__description">
              ...and receive $25 coupon for first shopping.
            </p>
            <form action="" class="newsletter__form">
              <input
                type="text"
                placeholder="Enter Your Email"
                class="newsletter__input"
              />
              <button type="submit" class="newsletter__btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
