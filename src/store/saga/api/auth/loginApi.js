import axios from "../axiosConfig";

export const reqLogin = async (payload) => {
  return await axios.post("/api/admin/auth/login", payload);
};
