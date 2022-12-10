import { getOneBlogAction } from "../actions/blogAction";

const getOneBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://tech-blog-server-16si.onrender.com/blog/${id}`
    );
    const result = await res.json();

    console.log(result);

    if (result) {
      dispatch(getOneBlogAction(result));
    }
  };
};

export default getOneBlog;
