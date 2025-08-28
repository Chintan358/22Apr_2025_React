import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { viewOrder } from "../features/products/orderSlice";

export const Accounts = () => {

  const { isAuthenticated, token } = useSelector((state) => state.login)
  const [tab, settab] = useState("dashboard")
  const dispatch = useDispatch()
  const orderdetails = useSelector((state) => state.orders.data)
  console.log(orderdetails);

  const orderhanler = () => {
    settab('orders')
    dispatch(viewOrder({ token }))
  }

  return (
    <>
      <main className="main">
        <section className="breadcrumb">
          <ul className="breadcrumb__list flex container">
            <li>
              <a href="index.html" className="breadcrumb__link">
                Home
              </a>
            </li>
            <li>
              <span className="breadcrumb__link"></span>
            </li>
            <li>
              <span className="breadcrumb__link">Account</span>
            </li>
          </ul>
        </section>

        <section className="accounts section--lg">
          <div className="accounts__container container grid">
            <div className="account__tabs">
              <p className="account__tab active-tab" data-target="#dashboard">
                <i className="fi fi-rs-settings-sliders"></i> Dashboard
              </p>
              <p className="account__tab" data-target="#orders" onClick={() => orderhanler()}>
                <i className="fi fi-rs-shopping-bag"></i> Orders
              </p>
              <p className="account__tab" data-target="#update-profile" onClick={() => settab('profile')}>
                <i className="fi fi-rs-user"></i> Update Profile
              </p>
              <p className="account__tab" data-target="#address" onClick={() => settab('address')}>
                <i className="fi fi-rs-marker"></i> My Address
              </p>
              <p className="account__tab" data-target="#change-password" onClick={() => settab('changepass')}>
                <i className="fi fi-rs-settings-sliders"></i> Change Password
              </p>
              <p className="account__tab">
                <i className="fi fi-rs-exit"></i> Logout
              </p>
            </div>
            <div className="tabs__content">
              <div className={`tab__content ${tab == 'dashboard' && 'active-tab'}`} content id="dashboard">
                <h3 className="tab__header">Hello Rosie</h3>
                <div className="tab__body">
                  <p className="tab__description">
                    From your account dashboard. you can easily check & view
                    your recent order, manage your shipping and billing
                    addresses and edit your password and account details
                  </p>
                </div>
              </div>
              <div className={`tab__content ${tab == 'orders' && 'active-tab'}`} content id="orders">
                <h3 className="tab__header">Your Orders</h3>


                <div className="tab__body">
                  {orderdetails.map(ele => <><table className="placed__order-table">
                    <thead>
                      <tr>
                        <th>Orders</th>
                        <th>{ele._id}</th>
                        <th>Orders_status</th>
                        <th>{ele.status}</th>
                        <th>Total</th>
                      </tr>
                      <tr>
                        <th>Payid</th>
                        <th>{ele.payment_id}</th>
                        <th>Date</th>
                        <th>{ele.created_at}</th>
                        <th>{ele.total_amount}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {ele.order_items.map(data => <tr>
                        <td>{data.product_details.name}</td>
                        <td><img src={data.product_details.image_url} width={50} height={50}></img></td>
                        <td>{data.price_at_time}</td>
                        <td>{data.quantity}</td>
                        <td>{data.price_at_time*data.quantity}</td>
                      </tr>)}



                    </tbody>
                  </table><br></br></>)}

                </div>
              </div>
              <div className={`tab__content ${tab == 'profile' && 'active-tab'}`} content id="update-profile">
                <h3 className="tab__header">Update Profile</h3>
                <div className="tab__body">
                  <form className="form grid">
                    <input
                      type="text"
                      placeholder="Username"
                      className="form__input"
                    />
                    <div className="form__btn">
                      <button className="btn btn--md">Save</button>
                    </div>
                  </form>
                </div>
              </div>
              <div className={`tab__content ${tab == 'address' && 'active-tab'}`} content id="address">
                <h3 className="tab__header">Shipping Address</h3>
                <div className="tab__body">
                  <address className="address">
                    3522 Interstate <br />
                    75 Business Spur, <br />
                    Sault Ste. <br />
                    Marie, Mi 49783
                  </address>
                  <p className="city">New York</p>
                  <a href="#" className="edit">
                    Edit
                  </a>
                </div>
              </div>
              <div className={`tab__content ${tab == 'changepass' && 'active-tab'}`} content id="change-password">
                <h3 className="tab__header">Change Password</h3>
                <div className="tab__body">
                  <form className="form grid">
                    <input
                      type="password"
                      placeholder="Current Password"
                      className="form__input"
                    />
                    <input
                      type="password"
                      placeholder="New Password"
                      className="form__input"
                    />
                    <input
                      type="password"
                      placeholder="Confirm Password"
                      className="form__input"
                    />
                    <div className="form__btn">
                      <button className="btn btn--md">Save</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="newsletter section">
          <div className="newsletter__container container grid">
            <h3 className="newsletter__title flex">
              <img
                src="./assets/img/icon-email.svg"
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
      </main >
    </>
  );
};
