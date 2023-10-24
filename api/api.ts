// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://10.0.2.2:8280/api",
});

export default api;
