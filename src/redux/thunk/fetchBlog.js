import { loadBlogs } from "../actions/blogAction";

const fetchBlog = () => {
  return async (dispatch, getState) => {
    const res = await fetch("http://localhost:5000/blogs");
    const blogs = await res.json();

    if (blogs.data.length) {
      dispatch(loadBlogs(blogs.data));
    }
  };
};

export default fetchBlog;
