// api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://192.168.123.152:8280/api",
});

export default api;
