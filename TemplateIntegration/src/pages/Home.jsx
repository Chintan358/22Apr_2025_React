import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { displayProduct } from "../features/products/productSlice";
import { displayCategory } from "../features/products/categorySlice";
import { addtoCart, viewCart } from "../features/products/cartSlice";


export const Home = () => {

  let p = useSelector((state) => state.product.data)
  const { isAuthenticated, token } = useSelector((state) => state.login)
  const [products, setproducts] = useState([])
  const categories = useSelector((state) => state.category.data)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const categorySelector = (cid) => {
    setproducts(p.filter(ele => ele.category._id == cid))
  }

  useEffect(() => {
    setproducts(p)
  }, [p])

  useEffect(() => {
    dispatch(displayProduct())
    dispatch(displayCategory())
  }, [])


  const carthandler = async (pid) => {

    if (localStorage.getItem("authtoken")) {
      const data = {
        pid, token
      }
      await dispatch(addtoCart(data))
      dispatch(viewCart({ token }))

    }
    else {
      navigate("/login")
    }

  }

  return (
    <>
      <main className="main">
        <section className="home section--lg">
          <div className="home__container container grid">
            <div className="home__content">
              <span className="home__subtitle">Hot Promotions</span>
              <h1 className="home__title">
                Fashion Trending <span>Great Collection</span>
              </h1>
              <p className="home__description">
                Save more with coupons & up tp 20% off
              </p>
              <a href="shop.html" className="btn">
                Shop Now
              </a>
            </div>
            <img
              src="./src/assets/img/home-img.png"
              className="home__img"
              alt="hats"
            />
          </div>
        </section>



        <section className="products container section">
          <div className="tab__btns">
            {categories.map(ele => <span className="tab__btn active-tab" onClick={() => categorySelector(ele._id)} >
              {ele.name}
            </span>)
            }

          </div>

          <div className="tab__items">
            <div className="tab__item active-tab" content id="featured">
              <div className="products__container grid">
                {products.map((ele) => (
                  <div className="product__item">
                    <div className="product__banner">
                      <Link
                        to="/details"
                        state={ele._id}
                        className="product__images"
                      >
                        <img
                          src={ele.image_url}
                          alt=""
                          className="product__img default"
                          width={150}
                          height={150}
                        />
                        <img
                          src={ele.image_url}
                          alt=""
                          className="product__img hover"
                        />
                      </Link>
                      <div className="product__actions">
                        <a
                          href="#"
                          className="action__btn"
                          aria-label="Quick View"
                        >
                          <i className="fi fi-rs-eye"></i>
                        </a>
                        <a
                          href="#"
                          className="action__btn"
                          aria-label="Add to Wishlist"
                        >
                          <i className="fi fi-rs-heart"></i>
                        </a>
                        <a
                          href="#"
                          className="action__btn"
                          aria-label="Compare"
                        >
                          <i className="fi fi-rs-shuffle"></i>
                        </a>
                      </div>
                      <div className="product__badge light-pink">Hot</div>
                    </div>
                    <div className="product__content">
                      <span className="product__category">{ele.category.name}</span>
                      <Link to="/details" state={ele._id}>
                        <h3 className="product__title">{ele.name}</h3>
                      </Link>

                      <div className="product__price flex">
                        <span className="new__price">${ele.price}</span>
                        <span className="old__price">
                          ${Math.ceil(ele.price + (ele.price * 10) / 100)}
                        </span>
                      </div>
                      <a
                        onClick={() => carthandler(ele._id)}
                        className="action__btn cart__btn"
                        aria-label="Add To Cart"
                      >
                        <i className="fi fi-rs-shopping-bag-add" ></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="deals section">
          <div className="deals__container container grid">
            <div className="deals__item">
              <div className="deals__group">
                <h3 className="deals__brand">Deals of the Day</h3>
                <span className="deals__category">Limited quantities</span>
              </div>
              <h4 className="deals__title">
                Summer Collection New Modern Design
              </h4>
              <div className="deals__price flex">
                <span className="new__price">$139.00</span>
                <span className="old__price">$160.99</span>
              </div>
              <div className="deals__group">
                <p className="deals__countdown-text">
                  Hurry Up! Offer Ends In:
                </p>
                <div className="countdown">
                  <div className="countdown__amount">
                    <p className="countdown__period">02</p>
                    <span className="unit">Days</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">22</p>
                    <span className="unit">Hours</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">57</p>
                    <span className="unit">Mins</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">28</p>
                    <span className="unit">Sec</span>
                  </div>
                </div>
              </div>
              <div className="deals__btn">
                <a href="details.html" className="btn btn--md">
                  Shop Now
                </a>
              </div>
            </div>
            <div className="deals__item">
              <div className="deals__group">
                <h3 className="deals__brand">Women Clothing</h3>
                <span className="deals__category">Shirts & Bag</span>
              </div>
              <h4 className="deals__title">Try Something new on vacation</h4>
              <div className="deals__price flex">
                <span className="new__price">$178.00</span>
                <span className="old__price">$256.99</span>
              </div>
              <div className="deals__group">
                <p className="deals__countdown-text">
                  Hurry Up! Offer Ends In:
                </p>
                <div className="countdown">
                  <div className="countdown__amount">
                    <p className="countdown__period">02</p>
                    <span className="unit">Days</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">22</p>
                    <span className="unit">Hours</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">57</p>
                    <span className="unit">Mins</span>
                  </div>
                  <div className="countdown__amount">
                    <p className="countdown__period">28</p>
                    <span className="unit">Sec</span>
                  </div>
                </div>
              </div>
              <div className="deals__btn">
                <a href="details.html" className="btn btn--md">
                  Shop Now
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section home__newsletter">
          <div className="newsletter__container container grid">
            <h3 className="newsletter__title flex">
              <img
                src="./src/assets/img/icon-email.svg"
                alt=""
                className="newsletter__icon"
              />
              Sign in to Newsletter
            </h3>
            <p className="newsletter__description">
              ...and receive $25 coupon for first shopping.
            </p>
            <form action="" className="newsletter__form">
              <input
                type="text"
                placeholder="Enter Your Email"
                className="newsletter__input"
              />
              <button type="submit" className="newsletter__btn">
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </main>
    </>
  );
};
