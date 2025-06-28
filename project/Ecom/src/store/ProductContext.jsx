import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductContextProvider = (props) => {
  const [products, setproducts] = useState([]);
  const [tab, setTab] = useState("Home");
  const [vid, setVid] = useState();

  const fetchProducts = () => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((data) => setproducts(data));
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, tab, setTab, vid, setVid }}>
      {props.children}
    </ProductContext.Provider>
  );
};

export default ProductContextProvider;
