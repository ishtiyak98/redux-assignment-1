import { addBlogState } from "../actions/blogAction";

const addBlog = (data) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      "https://tech-blog-server-16si.onrender.com/add-blog",
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-type": "application/json",
        },
      }
    );

    const result = await res.json();
    if (result.acknowledged) {
      window.alert("Blog Posted Successfully");
      dispatch(
        addBlogState({
          _id: data.insertedId,
          ...data,
        })
      );
    }
  };
};

export default addBlog;
