import React from "react";

const BlogList = ({ blogs, title, handleDelete }) => {
  // props :
  // const blogs = props.blogs;
  // const title = props.title;

  return (
    <div className="blog-list">
      <h2 style={{ textAlign: "left" }}>{title}</h2>
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <h2>{blog.title}</h2>
          <p>Written By {blog.author}</p>
          <button
            style={{ width: "100px" }}
            onClick={() => handleDelete(blog.id)}
          >
            Delete blog
          </button>
        </div>
      ))}
    </div>
  );
};

export default BlogList;
