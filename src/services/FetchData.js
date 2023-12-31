import axios from "axios";

export const getBlogs = async () => {
  try {
    const { data } = await axios.get("http://127.0.0.1:5000/api/v1/blogs");
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const getData = async () => {
  try {
    const { data } = await axios.get(
      "http://127.0.0.1:5000/api/v1/data/allProjects"
    );
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};
