import parser from "html-react-parser";
import React from "react";
import { useNavigate } from "react-router-dom";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addHistory } from "../../redux/actions/blogAction";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="card w-full bg-base-100 shadow-lg border-2 border-primary">
      <figure>
        <img
          src={blog.featuredImg}
          alt="blog_img"
          className="h-[200px] w-full object-cover"
        />
      </figure>
      <div className="px-4 py-5">
        <h2 className="card-title mb-2">{blog.title}</h2>
        <div className="mb-4">
          {parser(blog?.content?.slice(0, 121) + "...")}
        </div>
        <div className="space-x-2 mb-5 flex justify-center">
          {blog.tags.map((item) => (
            <button
              key={item}
              className="btn btn-sm lowercase text-xs bg-slate-400 border-none text-black hover:text-white rounded-sm"
            >
              #{item}
            </button>
          ))}
        </div>
        <div className="flex justify-between flex-wrap mb-4">
          <div className="flex items-center space-x-4">
            <div className="text-slate-500 flex items-center space-x-1">
              <AiFillLike></AiFillLike>
              <p>{blog.likes}</p>
            </div>
            <div className="text-slate-500 flex items-center space-x-1">
              <FaComments></FaComments>
              <p>{blog.comments}</p>
            </div>
            <div className="text-slate-500 flex items-center space-x-1">
              <FaBookmark></FaBookmark>
              <p>{blog.bookmarked}</p>
            </div>
          </div>
          <p className="text-slate-500">{blog.postDate}</p>
        </div>
        <div className="flex justify-center">
          <button
            className="btn btn-md rounded-sm btn-primary px-8"
            onClick={() => {
              dispatch(addHistory(blog));
              navigate(`/post/${blog._id}`);
            }}
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
