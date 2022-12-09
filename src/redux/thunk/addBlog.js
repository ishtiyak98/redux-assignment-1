import { addBlogState } from "../actions/blogAction";

const addBlog = (data) => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/add-blog", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json",
      },
    });

    const result = await res.json();
    if (result.acknowledged) {
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
