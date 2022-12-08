import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard/BlogCard";
import Navbar from "../../components/Navbar/Navbar";
import { checkByFirst, checkByLast } from "../../redux/actions/filterAction";
import { TOGGLE_SORT } from "../../redux/actiontypes/actiontypes";

const Home = () => {
  const [data, setData] = useState([]);
  const { filterReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  let content;

  console.log(filterReducer);

  useEffect(() => {
    fetch("http://localhost:5000/blogs")
      .then((res) => res.json())
      .then((data) => setData(data.data));
  }, []);

  console.log(data);

  if (data.length && !filterReducer.lastUpload && !filterReducer.firstUpload) {
    console.log("Triggered");
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {data
          .sort((a, b) => b.likes - a.likes)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    );
  }

  if (data.length && filterReducer.lastUpload) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {data
          .sort((a, b) => new Date(b.postDate) - new Date(a.postDate))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    );
  }

  if (data.length && filterReducer.firstUpload) {
    content = (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-14">
        {data
          .sort((a, b) => new Date(a.postDate) - new Date(b.postDate))
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog}></BlogCard>
          ))}
      </div>
    );
  }

  return (
    <>
      <Navbar></Navbar>

      <section className="px-5 py-4 lg:px-24 lg:py-6">
        <div className="flex justify-end mb-6">
          <div className="space-x-4">
            <button
              className={`btn ${
                !filterReducer.lastUpload && "btn-outline"
              } btn-secondary btn-sm rounded-sm text-sm capitalize`}
              onClick={() => dispatch(checkByLast())}
            >
              Sort by last upload
            </button>
            <button
              className={`btn ${
                !filterReducer.firstUpload && "btn-outline"
              } btn-secondary btn-sm rounded-sm text-sm capitalize`}
              onClick={() => dispatch(checkByFirst())}
            >
              Sort by first upload
            </button>
          </div>
        </div>
        {content}
      </section>
    </>
  );
};

export default Home;
