import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://komgrip.co.th/coincap",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
