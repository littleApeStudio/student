// 引入封装好的axios
import { request } from '@/utils/request'

// 查找学生
export function fix(data) {
    return request({
        url: '/stuManage/api/student/fix.php',
        data: data
    })
}
// 查找考试
export function getTest(data) {
    return request({
        url: '/stuManage/api/student/getTest.php',
        data: data
    })
}
// 是否考过试
export function tested(data) {
    return request({
        url: '/stuManage/api/student/tested.php',
        data: data
    })
}
// 查找试卷
export function getTesting(data) {
    return request({
        url: '/stuManage/api/student/getTesting.php',
        data: data
    })
}
// 提交成绩
export function addGrade(data) {
    return request({
        url: '/stuManage/api/student/addGrade.php',
        data: data
    })
}