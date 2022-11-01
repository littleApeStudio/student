// 引入封装好的axios
import {request} from '@/utils/request'

// 管理员注册
export function register(data) {
  return request({
    url: '/stuManage/api/admin/register.php',
    data: data
  })
}

// 管理员登录
export function alogin(data) {
  return request({
    url: '/stuManage/api/admin/login.php',
    data: data
  })
}

// 教师登录
export function tlogin(data) {
  return request({
    url: '/stuManage/api/teacher/login.php',
    data: data
  })
}

// 学生登录
export function slogin(data) {
  return request({
    url: '/stuManage/api/student/login.php',
    data: data
  })
}