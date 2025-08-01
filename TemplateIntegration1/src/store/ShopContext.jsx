import axios from "axios";
import { createContext, useEffect, useReducer } from "react";

export const ShopContext = createContext();

const ShopContextProvider = ({ children }) => {
  const productReducer = (state, action) => {
    if (action.type == "view") {
      state = action.data;
    }
    return state;
  };

  const [products, dispatcher] = useReducer(productReducer, []);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((result) => {
        const payload = {
          type: "view",
          data: result.data,
        };
        dispatcher(payload);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ShopContext.Provider value={{ products }}>{children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
