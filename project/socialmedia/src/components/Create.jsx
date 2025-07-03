import { useContext, useRef } from "react";
import { PostContext } from "../store/PostContext";

export const Create = () => {
  const { addPost } = useContext(PostContext);

  const category = useRef();
  const title = useRef();
  const content = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    const data = {
      category: category.current.value,
      title: title.current.value,
      content: content.current.value,
    };

    addPost(data);
    category.current.value = "";
    title.current.value = "";
    content.current.value = "";
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-5 mx-auto p-3 mt-5 card">
            <h2 align="center">Create Post</h2>
            <hr />
            <form action="" onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Enter Category"
                className="form-control"
                ref={category}
              />
              <br />
              <input
                type="text"
                placeholder="Enter Title"
                className="form-control"
                ref={title}
              />
              <br />
              <input
                type="text"
                placeholder="Enter content"
                className="form-control"
                ref={content}
              />
              <br />
              <input type="submit" className="btn btn-primary" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
