import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";
import Navbar from "../../components/Navbar/Navbar";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Navbar></Navbar>
      <section className="grid grid-cols-1 lg:grid-cols-3 gap-14 px-5 py-4 lg:px-24 lg:py-16">
        {data.map((blog) => (
          <BlogCard blog={blog}></BlogCard>
        ))}
      </section>
    </>
  );
};

export default Home;
