import React from "react";
import "./blogs.css";
import BlogCard from "./BlogCard";

const Blogs = ({ blogs, loading }) => {
  console.log("blogs : ", blogs);

  return (
    <>
      {loading && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
      {!loading && blogs && (
        <section id="blog" style={{ marginTop: "-4rem " }}>
          <h2 className="worksTitle">Latest Blogs</h2>
          <div className="worksImgs">
            {blogs.map((blog) => {
              return <BlogCard blog={blog} key={blog._id} />;
            })}
          </div>
        </section>
      )}
    </>
  );
};

export default Blogs;
