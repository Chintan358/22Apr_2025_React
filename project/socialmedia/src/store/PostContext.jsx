import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export const PostContext = createContext();

const PostcontextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState([]);

  const fetchPost = () => {
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
  };

  const deletePost = (id) => {
    fetch(`https://68665f6289803950dbb26cfd.mockapi.io/posts/posts/${id}`, {
      method: "delete",
    }).then(fetchPost);
  };

  const addPost = (data) => {
    if (data.id == null) {
      fetch("https://68665f6289803950dbb26cfd.mockapi.io/posts/posts", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }).then(fetchPost);
    } else {
      fetch(
        `https://68665f6289803950dbb26cfd.mockapi.io/posts/posts/${data.id}`,
        {
          method: "put",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      ).then(fetchPost);
    }

    navigate("/");
  };

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <PostContext value={{ posts, addPost, deletePost }}>{children}</PostContext>
  );
};

export default PostcontextProvider;
