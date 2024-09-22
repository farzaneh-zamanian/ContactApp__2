import axios from "axios";


const URL = "http://localhost:3000/";
const api = axios.create({
      // withCredentials: false,
      baseURL: URL
})
api.interceptors.request.use(
      (request) => request,

      (error) => Promise.reject(error)
);

api.interceptors.response.use(
      (response) => response.data,
      (error) => Promise.reject(error)
)

export { api }
