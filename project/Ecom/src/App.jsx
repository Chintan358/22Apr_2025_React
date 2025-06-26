import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import ProductContextProvider from "./store/productcontext";

export const App = () => {
  

  return (
    <>
      <ProductContextProvider>
        <Home></Home>
      </ProductContextProvider>
    </>
  );
};
