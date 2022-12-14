import { getOneBlogAction, updateBlogAction } from "../actions/blogAction";

const updateBlog = (id, blog) => {
  return async (dispatch, getState) => {
    const res = await fetch(
      `https://tech-blog-server-16si.onrender.com/blog/${id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blog),
      }
    );
    const result = await res.json();
    console.log(result);

    if (result.acknowledged) {
      window.alert("Blog updated successfully");
      dispatch(updateBlogAction({ _id: id, ...blog }));
    }
  };
};

export default updateBlog;
