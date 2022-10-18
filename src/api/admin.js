// 引入封装好的axios
import {request} from '@/utils/request'

// 注册
export function register(data) {
  return request({
    url: '/stuManage/api/admin/register.php',
    data: data
  })
}

// 登录
export function login(data) {
  return request({
    url: '/stuManage/api/admin/login.php',
    data: data
  })
}

// 添加教师
export function addTeacher(data) {
  return request({
    url: '/stuManage/api/admin/addTeacher.php',
    data: data
  })
}