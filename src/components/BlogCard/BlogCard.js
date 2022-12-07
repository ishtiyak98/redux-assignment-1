import parser from "html-react-parser";
import React from "react";

const BlogCard = ({ blog }) => {
  return (
    <div className="card w-full bg-base-100 shadow-lg border-2 border-primary">
      <figure>
        <img src={blog.featuredImg} alt="Shoes" />
      </figure>
      <div className="px-4 py-5">
        <h2 className="card-title mb-2">{blog.title}</h2>
        <p className="mb-4">{parser(blog.content.slice(0, 121) + "...")}</p>
        <div className="card-actions justify-end ">
          <button className="btn btn-md rounded-sm btn-primary px-8">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
