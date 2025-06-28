import { useContext } from "react";
import { ProductContext } from "../store/productcontext";

export const Card = ({ ele }) => {
  const { setTab, setVid } = useContext(ProductContext);
  const viewProduct = (id) => {
    setVid(id);
    setTab("View");
  };

  const addtocart = (id) => {
    const obj = { uid: 2, pid: id, qty: 1 };
    fetch("http://localhost:3000/carts", {
      method: "post",
      headers: {
        ContentType: "text/json",
      },
      body: JSON.stringify(obj),
    });
  };

  return (
    <>
      {" "}
      <div className="col">
        {" "}
        <div className="card shadow-sm">
          {" "}
          <img
            src={ele.image}
            alt=""
            className="img-fluid"
            width={200}
            height={200}
          />
          <div className="card-body">
            {" "}
            <p className="card-text">{ele.description}</p>{" "}
            <div className="d-flex justify-content-between align-items-center">
              {" "}
              <div className="btn-group">
                {" "}
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => viewProduct(ele.id)}
                >
                  View
                </button>{" "}
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                  onClick={() => addtocart(ele.id)}
                >
                  Add To Cart
                </button>{" "}
              </div>{" "}
              <small className="text-body-secondary">9 mins</small>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </>
  );
};
