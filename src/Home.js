import React from "react";
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState([
    {
      title: "My new website",
      body: "lorem ipsum ...",
      author: "Mario",
      id: 1,
    },
    {
      title: "Welcome party!",
      body: "lorem ipsum ...",
      author: "Yoshio",
      id: 2,
    },
    {
      title: "Web dev top tips",
      body: "lorem ipsum ...",
      author: "Mario",
      id: 3,
    },
  ]);

  const handleDelete = (id) => {
    const newBlog = blogs.filter((blog) => blog.id !== id);
    setBlogs(newBlog);
  };

  return (
    <>
      <div className="home">
        <BlogList
          blogs={blogs}
          title={"All Blogs!"}
          handleDelete={handleDelete}
        />
        <BlogList
          blogs={blogs.filter((blog) => blog.author === "Mario")}
          title={"Mario's Blogs!"}
        />
      </div>
    </>
  );
};

export default Home;
