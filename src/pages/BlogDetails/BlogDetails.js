import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import parser from "html-react-parser";
import { AiFillLike } from "react-icons/ai";
import { FaComments } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import getOneBlog from "../../redux/thunk/getOneBlog";

const BlogDetails = () => {
  const { _id } = useParams();
  const { blogPost } = useSelector((state) => state.blogReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneBlog(_id));
  }, [_id, dispatch]);

  return (
    <>
      <Navbar></Navbar>
      <section className="px-5 py-4 lg:px-24 lg:py-20">
        <div className="flex justify-center mb-10">
          <img src={blogPost.featuredImg} alt="" className="rounded-lg" />
        </div>
        <div className="space-y-4">
          <h2 className="text-center text-xl lg:text-4xl font-semibold">
            {blogPost.title}
          </h2>
          <h4 className="text-center text-base text-slate-500 lg:text-2xl font-semibold">
            {blogPost.author}
          </h4>
          <div className="flex justify-between flex-wrap">
            <div className="flex items-center space-x-4">
              <div className="text-slate-500 flex items-center space-x-1">
                <AiFillLike></AiFillLike>
                <p>{blogPost.likes}</p>
              </div>
              <div className="text-slate-500 flex items-center space-x-1">
                <FaComments></FaComments>
                <p>{blogPost.comments}</p>
              </div>
              <div className="text-slate-500 flex items-center space-x-1">
                <FaBookmark></FaBookmark>
                <p>{blogPost.bookmarked}</p>
              </div>
            </div>
            <p className="text-slate-500">{blogPost.postDate}</p>
          </div>
          <div className="">
            {Object.keys(blogPost).length > 0 && parser(blogPost.content)}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetails;
