import axios from "axios";
import { MessageBox, Message } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // 当跨域请求时发送cookie    开启时后台 Access-Control-Allow-Origin 不能设置为 * 应该是响应的地址
  timeout: 5000, // request timeout
  changeOrigin: true,
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 发送请求前时

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers["Authorization"] = getToken();
    }
    return config;
  },
  (error) => {
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// // 响应拦截
service.interceptors.response.use(
  /**
   * 如果你想获取http信息，如报头或状态
   * 请返回  response => response
   */

  /**
   * 通过自定义代码确定请求状态
   * 这里只是一个例子
   * 您也可以通过HTTP状态码判断状态
   */
  (response) => {
    const res = response.data;

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || res.msg || "Error",
        type: "error",
        duration: 5 * 1000,
      });

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      //1002:非法令牌;50012:其他客户端登录;50014:令牌过期;
      if (
        res.code === -50008 ||
        res.code === -400207 ||
        res.code === 50012 ||
        res.code === 50014
      ) {
        // to re-login
        MessageBox.confirm(
          "您已注销，您可以取消停留在此页面，或重新登录', '确认注销'",
          {
            confirmButtonText: "重新登录",
            cancelButtonText: "取消",
            type: "warning",
          }
        ).then(() => {
          store.dispatch("user/resetToken").then(() => {
            location.reload();
          });
        });
      }
      return Promise.reject(new Error(res.message || res.msg || "Error"));
    } else {
      return res;
    }
  },
  (error) => {
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000,
    });
    return Promise.reject(error);
  }
);

export default service;
