import { deleteBlogState } from "../actions/blogAction";

const deleteBlog = (id) => {
  return async (dispatch, getState) => {
    const res = await fetch(`http://localhost:5000/blog/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
    });
    const result = await res.json();
    console.log(result);
    if (result.acknowledged) {
      dispatch(deleteBlogState(id));
    }
  };
};

export default deleteBlog;
