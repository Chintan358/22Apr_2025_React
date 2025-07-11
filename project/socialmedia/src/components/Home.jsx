import { useContext } from "react";
import { PostContext } from "../store/PostContext";
import { Link } from "react-router-dom";

export const Home = () => {
  const { posts, deletePost } = useContext(PostContext);

  return (
    <>
      <div className="container mt-5 d-flex flex-wrap gap-3">
        {posts.map((ele) => (
          <div className="card p-3">
            <h5>{ele.category}</h5>
            <h3>{ele.title}</h3>
            <hr />
            <p>{ele.content}</p>
            <button
              className="btn btn-danger"
              onClick={() => deletePost(ele.id)}
            >
              delete
            </button>
            <br />

            <Link to={"/create"} state={ele.id} className="btn btn-primary">
              Edit
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};
