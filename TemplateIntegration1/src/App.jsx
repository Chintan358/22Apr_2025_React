import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import ShopContextProvider from "./store/ShopContext";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <Header />
        <Outlet></Outlet>
        <Footer />
      </ShopContextProvider>
    </>
  );
};

export default App;
