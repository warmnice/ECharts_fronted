import axios from "axios";

// 创建 Axios 实例
const instance = axios.create({
  baseURL: 'http://127.0.0.1:5000/', // 替换为你的后端 URL
});

// 请求拦截器
instance.interceptors.request.use(
  config => {
    // 在请求发送之前可以在这里进行一些操作，例如添加请求头
    config.headers.Authorization = 'Bearer token'; // 身份验证令牌
    return config;
  },
  error => {
    // 处理请求错误
    console.error(error);
    return Promise.reject(error);
  }
);

// 响应拦截器
instance.interceptors.response.use(
  response => {
    // 在这里对响应进行处理，例如处理错误状态码
    if (response.status >= 400) {
      throw new Error(response.data.message);
    }
    return response.data;
  },
  error => {
    // 处理响应错误
    console.error(error);
    return Promise.reject(error);
  }
);

export default instance;
