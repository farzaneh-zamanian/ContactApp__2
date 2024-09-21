import axios from "axios";


const URL = "http://localhost:3000/";
const api = axios.create({
      // withCredentials: false,
      baseURL: URL
})
api.interceptors.request.use(
      (request) => {
            return request;
      },
      (error) => {
            return Promise.reject(error)
      });

api.interceptors.response.use(
      (response) => {
            return response;
      },
      (error) => {
            return Promise.reject(error)
      })

export { api }
