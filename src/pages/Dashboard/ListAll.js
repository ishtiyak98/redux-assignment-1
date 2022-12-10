import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import deleteBlog from "../../redux/thunk/deleteBlog";
import fetchBlog from "../../redux/thunk/fetchBlog";

const ListAll = () => {
  const { blogReducer } = useSelector((state) => state);
  const data = blogReducer.blogs;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBlog());
  }, [dispatch]);

  return (
    <section className="px-5 py-4 lg:px-24 lg:py-10">
      <h2 className="mb-10 text-4xl font-semibold text-blue-600">
        All Blogs List
      </h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Post Date</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index} className="hover">
                <th>{index + 1}</th>
                <td>{item.title}</td>
                <td>{item.author}</td>
                <td>{item.postDate}</td>
                <td>
                  <div className="space-x-2 ">
                    <button
                      className="btn btn-primary btn-sm text-white"
                      onClick={() => {
                        navigate("/dashboard/edit-blog");
                      }}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-error btn-sm text-white"
                      onClick={() => {
                        dispatch(deleteBlog(item._id));
                      }}
                    >
                      delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ListAll;
