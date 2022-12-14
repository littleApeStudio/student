import axios from 'axios'
import {Message} from "element-ui";
const ConfigBaseURL = 'http://localhost:80/' //默认路径，这里也可以使用env来判断环境
//使用create方法创建axios实例
export const request = axios.create({
    timeout: 7000, // 请求超时时间
    baseURL: ConfigBaseURL,
    method: 'post',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    }
})
// 添加请求拦截器
request.interceptors.request.use(config => {
    return config
})
// 添加响应拦截器
request.interceptors.response.use(response => {
    return response.data
}, error => {
    Message({
        message: '后端接口异常或网络连接错误',
        type: 'error'
    })
    return Promise.reject(error)
})
