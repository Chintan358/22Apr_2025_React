import { useContext } from "react";
import { ProductContext } from "../store/productcontext";

export const Details = () => {
  const { setTab, vid, products } = useContext(ProductContext);

  const p = products.find((ele) => ele.id == vid);

  const backtoHome = () => {
    setTab("Home");
  };

  return (
    <>
      <button onClick={backtoHome}>Home</button>
      <h1>Details : {p.id} </h1>
    </>
  );
};
