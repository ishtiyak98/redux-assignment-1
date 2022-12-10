import { loadBlogs } from "../actions/blogAction";

const fetchBlog = () => {
  return async (dispatch, getState) => {
    const res = await fetch("https://tech-blog-server-16si.onrender.com/blogs");
    const blogs = await res.json();

    if (blogs.data.length) {
      dispatch(loadBlogs(blogs.data));
    }
  };
};

export default fetchBlog;
