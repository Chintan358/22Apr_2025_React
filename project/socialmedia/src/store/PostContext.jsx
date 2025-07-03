import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const PostContext = createContext();

const PostcontextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://68665f6289803950dbb26cfd.mockapi.io/posts/posts")
      .then((resp) => {
        return resp.json();
      })
      .then((result) => {
        setPosts(result);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const addPost = (data) => {
    console.log(data);
    fetch("https://68665f6289803950dbb26cfd.mockapi.io/posts/posts", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    navigate("/");
  };

  return <PostContext value={{ posts, addPost }}>{children}</PostContext>;
};

export default PostcontextProvider;
