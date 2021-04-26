import axios from "axios";
const apiClient = axios.create({
  // baseURL: 'https://devportal.saglive.com/rest/v1',
  baseURL: "http://localhost:8080/rest/v1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default {
  apis() {
    return apiClient.get("/apis");
  },
};
