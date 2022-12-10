import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getOneBlog from "../../redux/thunk/getOneBlog";
import updateBlog from "../../redux/thunk/updateBlog";

const UpdateBlog = () => {
  const dispatch = useDispatch();

  const { _id } = useParams();
  const blogPost = useSelector((state) => state.blogReducer.blogPost);
  const [value, setValue] = useState(
    blogPost.content ? blogPost.content : "back to blog-list to view"
  );

  const currentDate = new Date(
    blogPost.postDate ? blogPost.postDate : "2022-12-02"
  );

  useEffect(() => {
    dispatch(getOneBlog(_id));
  }, []);

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "code-block"],
      ["clean"],
    ],
  };

  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  const handleChange = (html) => {
    setValue(html);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const postDate = e.target.currentDate.value;
    const author = e.target.author.value;
    const content = value;
    const featuredImg = e.target.imageLink.value;
    const likes = blogPost.likes;
    const comments = blogPost.comments;
    const bookmarked = blogPost.bookmarked;
    const tags = [];

    const blog = {
      title,
      postDate,
      author,
      content,
      featuredImg,
      likes,
      comments,
      bookmarked,
      tags,
    };
    console.log(blog);
    dispatch(updateBlog(blogPost._id, blog));
    e.target.defaultValue = "";
    e.target.reset();
  };

  console.log(blogPost);
  return (
    <section className="px-5 py-4 lg:px-24 lg:py-10">
      <h2 className="mb-10 text-4xl font-semibold text-blue-600">
        Edit A Blog {blogPost._id} / {blogPost.title}
      </h2>

      <form action="" onSubmit={handleSubmit} className="w-[600px]">
        <div className="space-x-5 mb-4">
          <input
            type="text"
            placeholder="Post Title"
            name="title"
            defaultValue={blogPost.title}
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="date"
            name="currentDate"
            defaultValue={currentDate.toISOString().slice(0, 10)}
            className="input input-bordered input-primary w-[170px] max-w-xs"
          />
        </div>
        <input
          type="text"
          placeholder="Author Name"
          name="author"
          defaultValue={blogPost.author}
          required
          className="input input-bordered mb-4 input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Image Link"
          name="imageLink"
          defaultValue={blogPost.featuredImg}
          required
          className="input input-bordered input-primary w-full max-w-xs"
        />
        <div className="my-5">
          <ReactQuill
            className="h-full ring-1 ring-primary "
            theme="snow"
            modules={modules}
            formats={formats}
            value={value}
            onChange={handleChange}
          />
        </div>
        <input className="btn btn-primary" type="submit" value="Update" />
      </form>
    </section>
  );
};

export default UpdateBlog;
