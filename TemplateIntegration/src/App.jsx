import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { viewCart } from "./features/products/cartSlice";


const App = () => {


  // const data = useSelector((state) => state.cart.data)
  const { token, isAuthenticated } = useSelector((state) => state.login)



  const dispatch = useDispatch()
  useEffect(() => {

    if (isAuthenticated) {
      dispatch(viewCart({ token }))

    }


  }, [isAuthenticated, token])



  return (
    <>

      <Header />
      <Outlet></Outlet>
      <Footer />

    </>
  );
};

export default App;
