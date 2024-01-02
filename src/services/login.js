import axios from "axios";
import baseURL from "./baseUrl";

axios.defaults.baseURL = baseURL;
axios.defaults.withCredentials = true;

export const login = async (email, password) => {
  try {
    const { data } = await axios.post("/api/v1/auth/login", {
      email,
      password,
    });
    return data;
  } catch (error) {
    console.log("Error : ", error);
  }
};
