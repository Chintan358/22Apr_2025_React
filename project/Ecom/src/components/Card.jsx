export const Card = ({ ele }) => {
  const viewProduct = (id) => {
        
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
                >
                  Edit
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
