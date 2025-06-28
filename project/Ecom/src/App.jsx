import { useContext, useEffect, useState } from "react";
import { Home } from "./components/Home";
import ProductContextProvider, { ProductContext } from "./store/productcontext";
import { Details } from "./components/Details";

export const App = () => {
  const { tab } = useContext(ProductContext);

  // console.log(tab);

  return <>{tab == "Home" ? <Home></Home> : <Details></Details>}</>;
};
