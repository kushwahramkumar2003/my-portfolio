import { useEffect, useState } from "react";
import { getBlogs, getData } from "../services/FetchData";

const useFetchData = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const resData = await getData();
        const resBlog = await getBlogs();

        // console.log("resData : ", resData);
        // console.log("resBlog : ", resBlog);

        setData(resData);
        setBlogs(resBlog);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return { data, loading, blogs };
};

export default useFetchData;
