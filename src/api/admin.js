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

// 查找教师
export function getTeacher(data) {
  return request({
    url: '/stuManage/api/admin/getTeacher.php',
    data: data
  })
}

// 删除教师
export function delateTeacher(data) {
  return request({
    url: '/stuManage/api/admin/delateTeacher.php',
    data: data
  })
}

// 添加学生
export function addStudent(data) {
  return request({
    url: '/stuManage/api/admin/addStudent.php',
    data: data
  })
}

// 查找学生
export function getStudent(data) {
  return request({
    url: '/stuManage/api/admin/getStudent.php',
    data: data
  })
}

// 删除学生
export function delateStudent(data) {
  return request({
    url: '/stuManage/api/admin/delateStudent.php',
    data: data
  })
}

