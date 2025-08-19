import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { viewCart } from "./features/products/cartSlice";


const App = () => {


  const data = useSelector((state) => state.cart.data)
  const { token } = useSelector((state) => state.login)
  const dispatch = useDispatch()
  useEffect(() => {


    dispatch(viewCart({ token }))

  }, [data])



  return (
    <>

      <Header data={data.length} />
      <Outlet></Outlet>
      <Footer />

    </>
  );
};

export default App;
