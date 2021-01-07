// 基于 axios 封装的 请求模块

import axios from 'axios'

const request = axios.create({
  baseURL: 'http://api-toutiao-web.itheima.net'
})

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 获取浏览器中存储的 token
  const user = JSON.parse(window.localStorage.getItem('user'))
  // 如果浏览器中 user 存在 就保存到请求中
  if (user) {
    config.headers.Authorization = 'Bearer ' + user.token
  }
  // 返回 config 才会发送请求
  return config
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error)
})

export default request
