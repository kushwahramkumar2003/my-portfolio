import React, { useEffect, useState } from "react";

import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";
import Intro from "../Intro/Intro";
import Navbar from "../Navbar/Navbar";
import Skills from "../Skills/Skills";
import Works from "../Works/Works";
import Blogs from "../Blogs/Blogs.js";
import useFetchData from "../../hooks/useFetchData.js";

const Home = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const [data, setData] = useState(null);

  const {
    data: resData,
    loading: resLoading,
    blogs: resBlogs,
  } = useFetchData();

  useEffect(() => {
    setLoading(resLoading);
    setData(resData);
    setBlogs(resBlogs);
  }, [resLoading]);

  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works projects={data} loading={loading} />
      <Blogs blogs={blogs} loading={loading} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
