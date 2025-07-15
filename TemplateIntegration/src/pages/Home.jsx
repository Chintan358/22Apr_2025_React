import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ShopContext } from "../store/ShopContext";

export const Home = () => {
  const { products } = useContext(ShopContext);
  const a = Array.from({length:5});
  console.log(a);

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

        <section className="categories container section">
          <h3 className="section__title">
            <span>Popular</span> Categories
          </h3>
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={4}
            loop={true}
            navigation
            className="categories__container"
          >
            {[
              { img: "category-1.jpg", title: "T-Shirt" },
              { img: "category-2.jpg", title: "Bags" },
              { img: "category-3.jpg", title: "Sandal" },
              { img: "category-4.jpg", title: "Scarf Cap" },
              { img: "category-5.jpg", title: "Shoes" },
              { img: "category-6.jpg", title: "Pillowcase" },
              { img: "category-7.jpg", title: "Jumpsuit" },
              { img: "category-8.jpg", title: "Hats" },
            ].map((cat, index) => (
              <SwiperSlide key={index}>
                <img
                  src={`./src/assets/img/${cat.img}`}
                  alt={cat.title}
                  className="category__img"
                />
                <h3 className="category__title ">{cat.title}</h3>
              </SwiperSlide>
            ))}
          </Swiper>
        </section>

        <section className="products container section">
          <div className="tab__btns">
            <span className="tab__btn active-tab" data-target="#featured">
              Featured
            </span>
            <span className="tab__btn" data-target="#popular">
              Popular
            </span>
            <span className="tab__btn" data-target="#new-added">
              New Added
            </span>
          </div>

          <div className="tab__items">
            <div className="tab__item active-tab" content id="featured">
              <div className="products__container grid">
                {products.map((ele) => (
                  <div className="product__item">
                    <div className="product__banner">
                      <a href="details.html" className="product__images">
                        <img
                          src={ele.image}
                          alt=""
                          className="product__img default"
                          width={150}
                          height={150}
                        />
                        <img
                          src={ele.image}
                          alt=""
                          className="product__img hover"
                        />
                      </a>
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
                      <span className="product__category">{ele.category}</span>
                      <a href="details.html">
                        <h3 className="product__title">{ele.title}</h3>
                      </a>
                      <div className="product__rating">
                        {Array.from({length:Math.round(ele.rating.rate)}).map((ele) => (
                          <i className="fi fi-rs-star"></i>
                        ))}
                      </div>
                      <div className="product__price flex">
                        <span className="new__price">${ele.price}</span>
                        <span className="old__price">
                          ${Math.ceil(ele.price + (ele.price * 10) / 100)}
                        </span>
                      </div>
                      <a
                        href="#"
                        className="action__btn cart__btn"
                        aria-label="Add To Cart"
                      >
                        <i className="fi fi-rs-shopping-bag-add"></i>
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
