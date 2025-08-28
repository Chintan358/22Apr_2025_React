import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCart, updateCart, viewCart } from "../features/products/cartSlice";
import { payment } from "../features/users/paymentSlice";
import { createOrder } from "../features/products/orderSlice";
import { useNavigate } from "react-router-dom";

export const Cart = () => {

  const dispatch = useDispatch()
  const { token } = useSelector((state) => state.login)
  const cartdata = useSelector((state) => state.cart.data)
  const navigate = useNavigate()

  const removecarthandler = async (cid) => {
    const data = {
      cid, token
    }
    await dispatch(removeCart(data))


    dispatch(viewCart({ token }))
  }

  const [qty, setqty] = useState()
  const qtyChangeHandler = async (qty, cid) => {

    const data = {
      token, cid, qty
    }
    await dispatch(updateCart(data))

    dispatch(viewCart({ token }))

  }

  // useEffect(() => {
  //   const data = {
  //     token
  //   }
  //   dispatch(viewCart(data))
  // }, [])


  const subtotal = cartdata.reduce((acc, ele) => acc + (ele.product.price * ele.quantity), 0)



  const paymentHandler = async () => {

    const resp = await dispatch(payment(subtotal)).unwrap()
    if (resp) {
      var options = {
        "key": "rzp_test_R8LF6p6eS7swQn", // Enter the Key ID generated from the Dashboard
        "amount": resp.amount, // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
        "currency": "INR",
        "name": "Acme Corp",
        "description": "Test Transaction",
        "image": "https://example.com/your_logo",
        "order_id": resp.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response) {
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          await dispatch(createOrder({ "token": token, payid: response.razorpay_payment_id }))
          navigate("/")

        },
        "prefill": {
          "name": "Gaurav Kumar",
          "email": "gaurav.kumar@example.com",
          "contact": "9000090000"
        },
        "notes": {
          "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#3399cc"
        }
      };
      var rzp1 = new Razorpay(options);
      rzp1.on('payment.failed', function (response) {
        alert(response.error.code);
        alert(response.error.description);
        alert(response.error.source);
        alert(response.error.step);
        alert(response.error.reason);
        alert(response.error.metadata.order_id);
        alert(response.error.metadata.payment_id);
      });
      rzp1.open();
    }


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
              <span class="breadcrumb__link">Shop</span>
            </li>
            <li>
              <span class="breadcrumb__link"></span>
            </li>
            <li>
              <span class="breadcrumb__link">Cart</span>
            </li>
          </ul>
        </section>

        <section class="cart section--lg container">
          <div class="table__container">
            <table class="table">
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Subtotal</th>
                  <th>Rename</th>
                </tr>
              </thead>
              <tbody>

                {cartdata.map(ele =>

                  < tr >

                    <td>
                      <img
                        src={ele.product.image_url}
                        alt=""
                        class="table__img"
                      />
                    </td>
                    <td>
                      <h3 class="table__title">
                        {ele.product.name}
                      </h3>

                    </td>
                    <td>
                      <span class="table__price">${ele.product.price}</span>
                    </td>
                    <td>
                      <button onClick={(e) => qtyChangeHandler(1, ele._id)}> + </button>
                      <input type="text" value={ele.quantity} class="quantity" />
                      <button onClick={(e) => qtyChangeHandler(-1, ele._id)}> - </button>
                    </td>
                    <td>
                      <span class="subtotal">${ele.product.price * ele.quantity}</span>
                    </td>
                    <td>
                      <i class="fi fi-rs-trash table__trash" onClick={() => removecarthandler(ele._id)}></i>
                    </td>
                  </tr>)}


              </tbody>
            </table>
          </div>

          <div class="cart__actions">
            <a href="#" class="btn flex btn__md">
              <i class="fi-rs-shuffle"></i> Update Cart
            </a>
            <a href="#" class="btn flex btn__md">
              <i class="fi-rs-shopping-bag"></i> Continue Shopping
            </a>
          </div>

          <div class="divider">
            <i class="fi fi-rs-fingerprint"></i>
          </div>

          <div class="cart__group grid">
            <div>
              <div class="cart__shippinp">
                <h3 class="section__title">Calculate Shipping</h3>
                <form action="" class="form grid">
                  <input
                    type="text"
                    class="form__input"
                    placeholder="State / Country"
                  />
                  <div class="form__group grid">
                    <input type="text" class="form__input" placeholder="City" />
                    <input
                      type="text"
                      class="form__input"
                      placeholder="PostCode"
                    />
                  </div>
                  <div class="form__btn">
                    <button class="btn flex btn--sm">
                      <i class="fi-rs-shuffle"></i> Update
                    </button>
                  </div>
                </form>
              </div>
              <div class="cart__coupon">
                <h3 class="section__title">Apply Coupon</h3>
                <form action="" class="coupon__form form grid">
                  <div class="form__group grid">
                    <input
                      type="text"
                      class="form__input"
                      placeholder="Enter Your Coupon"
                    />
                    <div class="form__btn">
                      <button class="btn flex btn--sm">
                        <i class="fi-rs-label"></i> Aplly
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            <div class="cart__total">
              <h3 class="section__title">Cart Totals</h3>
              <table class="cart__total-table">
                <tr>
                  <td>
                    <span class="cart__total-title">Cart Subtotal</span>
                  </td>
                  <td>
                    <span class="cart__total-price">${subtotal}</span>
                  </td>
                </tr>

                <tr>
                  <td>
                    <span class="cart__total-title">Total</span>
                  </td>
                  <td>
                    <span class="cart__total-price">${subtotal}</span>
                  </td>
                </tr>
              </table>
              <a class="btn flex btn--md" onClick={paymentHandler}>
                <i class="fi fi-rs-box-alt"></i> Proceed To Checkout
              </a>
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
      </main >
    </>
  );
};
