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

// 添加班级
export function addClass(data) {
  return request({
    url: '/stuManage/api/admin/addClass.php',
    data: data
  })
}

// 查询班级
export function getClass(data) {
  return request({
    url: '/stuManage/api/admin/getClass.php',
    data: data
  })
}

// 删除班级
export function delateClass(data) {
  return request({
    url: '/stuManage/api/admin/delateClass.php',
    data: data
  })
}

// 添加课程
export function addCourse(data) {
  return request({
    url: '/stuManage/api/admin/addCourse.php',
    data: data
  })
}

// 查询课程
export function getCourse(data) {
  return request({
    url: '/stuManage/api/admin/getCourse.php',
    data: data
  })
}

// 删除课程
export function delateCourse(data) {
  return request({
    url: '/stuManage/api/admin/delateCourse.php',
    data: data
  })
}

// 添加科目
export function addKemu(data) {
  return request({
    url: '/stuManage/api/admin/addKemu.php',
    data: data
  })
}

// 查询科目
export function getKemu(data) {
  return request({
    url: '/stuManage/api/admin/getKemu.php',
    data: data
  })
}

// 删除科目
export function delateKemu(data) {
  return request({
    url: '/stuManage/api/admin/delateKemu.php',
    data: data
  })
}

// 添加通知
export function addNotice(data) {
  return request({
    url: '/stuManage/api/admin/addNotice.php',
    data: data
  })
}


// 获取通知
export function getNotice(data) {
  return request({
    url: '/stuManage/api/admin/getNotice.php',
    data: data
  })
}

// 删除通知
export function delateNotice(data) {
  return request({
    url: '/stuManage/api/admin/delateNotice.php',
    data: data
  })
}

// 添加试题
export function addShiti(data) {
  return request({
    url: '/stuManage/api/admin/addShiti.php',
    data: data
  })
}


// 获取试题
export function getShiti(data) {
  return request({
    url: '/stuManage/api/admin/getShiti.php',
    data: data
  })
}

// 删除试题
export function delateShiti(data) {
  return request({
    url: '/stuManage/api/admin/delateShiti.php',
    data: data
  })
}
