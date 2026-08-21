import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api"; /// when connecting to the mobile phone. 
/// but for desktop use 127.0.0.1
//// for mobile 10.96.12.172

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;