import { useContext } from "react";
import { Card } from "./Card";
import { ProductContext } from "../store/productcontext";

export const Home = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <div className="container">
        {" "}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {" "}
          {products.map((ele) => (
            <Card key={ele.id} ele={ele}></Card>
          ))}
        </div>{" "}
      </div>
    </>
  );
};
