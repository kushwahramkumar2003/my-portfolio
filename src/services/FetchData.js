import axios from "axios";

import baseURL from "./baseUrl";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export const getBlogs = async () => {
  try {
    const { data } = await axios.get(`/api/v1/blogs`);
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};

export const getData = async () => {
  try {
    const { data } = await axios.get(`/api/v1/data/allProjects`);
    console.log("project data : ", data);
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};
