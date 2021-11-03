import axios from "axios";

const AXIOS_BASE_URL = process.env.REACT_APP_AXIOS_BASE_URL;

export const client = axios.create({
  baseURL: AXIOS_BASE_URL || "http://localhost:3000",
});
