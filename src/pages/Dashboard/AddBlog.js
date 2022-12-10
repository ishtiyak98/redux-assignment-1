import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch } from "react-redux";
import addBlog from "../../redux/thunk/addBlog";

const AddBlog = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const currentDate = new Date();

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
    const likes = 0;
    const comments = 0;
    const bookmarked = 0;
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

    dispatch(addBlog(blog));
    e.target.reset();
    setValue("");
  };

  return (
    <section className="px-5 py-4 lg:px-24 lg:py-10">
      <h2 className="mb-10 text-4xl font-semibold text-blue-600">
        Post A Blog
      </h2>

      <form action="" onSubmit={handleSubmit} className="w-[600px]">
        <div className="space-x-5 mb-4">
          <input
            type="text"
            placeholder="Post Title"
            name="title"
            required
            className="input input-bordered input-primary w-full max-w-xs"
          />
          <input
            type="text"
            readOnly
            name="currentDate"
            value={currentDate.toISOString().slice(0, 10)}
            className="input input-bordered input-primary w-[170px] max-w-xs"
          />
        </div>
        <input
          type="text"
          placeholder="Author Name"
          name="author"
          required
          className="input input-bordered mb-4 input-primary w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Image Link"
          name="imageLink"
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
        <input className="btn btn-primary" type="submit" value="Post" />
      </form>
    </section>
  );
};

export default AddBlog;
