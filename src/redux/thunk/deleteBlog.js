import { deleteBlogState } from "../actions/blogAction";

const deleteBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://tech-blog-server-16si.onrender.com/blog/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    const result = await res.json();
    console.log(result);
    if (result.acknowledged) {
      dispatch(deleteBlogState(id));
    }
  };
};

export default deleteBlog;
