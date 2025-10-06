import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000/api", // backend URL
    baseURL: "https://notes-backend-84zi.onrender.com/api", 
});

// attach token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("token");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
