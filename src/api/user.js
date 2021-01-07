/*
*   请求用户相关的操作
*/
import request from '@/utils/request'
// 用户登录接口
export const login = data => {
  return request({
    method: 'POST',
    url: '/mp/v1_0/authorizations',
    data
  })
}

// 获取用户信息
export const getUserInfo = () => {
  return request({
    method: 'PATCH',
    url: '/mp/v1_0/user/profile'
  })
}

//  修改用户信息
export const updateUser = () => {

}
