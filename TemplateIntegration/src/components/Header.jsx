import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { logout } from "../features/users/loginSlice";
import { viewCart } from "../features/products/cartSlice";

export const Header = ({ data }) => {

  const { isAuthenticated, token } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const cartdata = useSelector((state) => state.cart.data)



  // useEffect(() => {
  //   dispatch(viewCart({ token }))
  // }, [cartdata])


  const logoutHandler = () => {

    dispatch(logout())
    dispatch(viewCart({ token }))
    navigate("/")

  }

  return (
    <>
      <header className="header">
        <nav className="nav container">
          <Link to={"/"} className="nav__logo">
            <img
              className="nav__logo-img"
              src="./src/assets/img/logo.svg"
              alt="website logo"
            />
          </Link>
          <div className="nav__menu" id="nav-menu">
            <div className="nav__menu-top">
              <Link to={"/"} className="nav__menu-logo">
                <img src="./src/assets/img/logo.svg" alt="" />
              </Link>
              <div className="nav__close" id="nav-close">
                <i className="fi fi-rs-cross-small"></i>
              </div>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                <Link to={"/"} className="nav__link active-link">
                  Home
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/shop"} className="nav__link">
                  Shop
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/accounts"} className="nav__link">
                  My Account
                </Link>
              </li>
              <li className="nav__item">
                <Link to={"/compare"} className="nav__link">
                  Compare
                </Link>
              </li>
              {isAuthenticated ? <li className="nav__item">
                <Link onClick={logoutHandler} className="nav__link">
                  Logout
                </Link>
              </li> : <li className="nav__item">
                <Link to={"/login"} className="nav__link">
                  Login
                </Link>
              </li>}

            </ul>
            <div className="header__search">
              <input
                type="text"
                placeholder="Search For Items..."
                className="form__input"
              />
              <button className="search__btn">
                <img src="./src/assets/img/search.png" alt="search icon" />
              </button>
            </div>
          </div>
          <div className="header__user-actions">
            <Link
              to={"/wishlist"}
              className="header__action-btn"
              title="Wishlist"
            >
              <img src="./src/assets/img/icon-heart.svg" alt="" />
              <span className="count">3</span>
            </Link>
            <Link to={"/cart"} className="header__action-btn" title="Cart">
              <img src="./src/assets/img/icon-cart.svg" alt="" />
              <span className="count">{cartdata.length}</span>
            </Link>
            <div className="header__action-btn nav__toggle" id="nav-toggle">
              <img src="./src/assets//img/menu-burger.svg" alt="" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
