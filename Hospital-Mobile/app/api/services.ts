import axios from "axios";

const API_URL = "http://YOUR_PC_IP:5000/api"; /// when connecting to the mobile phone. 

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;