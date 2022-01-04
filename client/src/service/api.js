import axios from "axios";
// axios.defaults.withCredentials = true;

const URL = "http://localhost:5000";

export const saveUser = async (user) => {
  try {
    return await axios.post(`${URL}/register`, user);
  } catch (err) {
    console.log("Error while calling saveUser API", err);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    // console.log(email, password);
    axios.defaults.withCredentials = true;
    return await axios.post(`${URL}/login`, { email, password });
  } catch (err) {
    console.log("Error while calling loginUser API", err);
  }
};

export const getUserInfo = async () => {
  try {
    let response = await axios.get(`${URL}/about`);
    return response;
  } catch (err) {
    console.log("Error while calling getUserInfo API", err);
  }
};
