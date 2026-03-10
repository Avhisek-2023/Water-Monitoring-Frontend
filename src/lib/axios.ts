import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://water-monitoring-backend.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});

axiosClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

axiosClient.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    try {
      const { response } = error;
      if (response.status == 401) {
        localStorage.removeItem("token");
      }
    } catch (e) {
      if (e instanceof Error) {
        console.error("Axios error:", e.message);
      } else {
        console.error("Axios error:", e);
      }
    }
    throw error;
  }
);

export default axiosClient;
