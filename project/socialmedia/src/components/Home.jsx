import { useContext } from "react";
import { PostContext } from "../store/PostContext";

export const Home = () => {
  const { posts } = useContext(PostContext);

  return (
    <>
      <div className="container mt-5 d-flex flex-wrap gap-3">
        {posts.map((ele) => (
          <div className="card p-3">
            <h5>{ele.category}</h5>
            <h3>{ele.title}</h3>
            <hr />
            <p>{ele.content}</p>
          </div>
        ))}
      </div>
    </>
  );
};
