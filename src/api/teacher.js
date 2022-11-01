// 引入封装好的axios
import {request} from '@/utils/request'

// 查找学生
export function getStudent(data) {
  return request({
    url: '/stuManage/api/teacher/getStudent.php',
    data: data
  })
}

// 添加试题
export function addShiti(data) {
  return request({
    url: '/stuManage/api/teacher/addShiti.php',
    data: data
  })
}


// 获取试题
export function getShiti(data) {
  return request({
    url: '/stuManage/api/teacher/getShiti.php',
    data: data
  })
}

// 添加题目
export function addXuanze(data) {
  return request({
    url: '/stuManage/api/teacher/addXuanze.php',
    data: data
  })
}

// 查看题目
export function getXuanze(data) {
  return request({
    url: '/stuManage/api/teacher/getXuanze.php',
    data: data
  })
}

// 添加考试
export function addTest(data) {
  return request({
    url: '/stuManage/api/teacher/addTest.php',
    data: data
  })
}

// 获取考试
export function getTest(data) {
  return request({
    url: '/stuManage/api/teacher/getTest.php',
    data: data
  })
}
