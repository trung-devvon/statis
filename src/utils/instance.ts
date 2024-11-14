import axios from "axios";

const instance = axios.create({
  baseURL: process.env.BASE_API_URL,
  timeout: 5000,
});

axios.interceptors.request.use(
  function (config) {
    return config;
  },
  function (error) {
    // Thực hiện kịch bản gì đó khi yêu cầu bị lỗi
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function (response) {
    // Thực thi các kịch bản cần thiết ở đây
    // trước khi response đến điểm cuối
    return response;
  },
  function (error) {
    // Thực thi đối với các phản hồi bị lỗi
    // status code: 4xx, 5xx.
    return Promise.reject(error);
  }
);

export default instance
