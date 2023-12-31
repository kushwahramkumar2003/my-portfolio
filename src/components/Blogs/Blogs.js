import React from "react";
import "./blogs.css";
import BlogCard from "./BlogCard";

const Blogs = ({ blogs, loading }) => {
  console.log("blogs : ", blogs);

  return (
    <section id="works" style={{ marginTop: "-4rem "}}>
      <h2 className="worksTitle">Latest Blogs</h2>
      <div className="worksImgs">
        {!loading &&
          blogs &&
          blogs.map((blog) => {
            return <BlogCard blog={blog} />;
          })}
      </div>
    </section>
  );
};

export default Blogs;
