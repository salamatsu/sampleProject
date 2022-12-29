import axios from "axios";
export const BASE_URL = "https://demo.schoolbook.ph:3002";

export default axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const axiosMultipart = axios.create({
  baseURL: BASE_URL,
  headers: {
    "content-type": "multipart/form-data",
    "Access-Control-Allow-Origin": "*",
  },
});
