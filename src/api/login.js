// 引入封装好的axios
import {request} from '@/utils/request'

// 邮箱发送验证码
export function sentEmail(data) {
  return request({
    url: '/api/register/sentEmail',
    data: data
  })
}