/*
*  内容管理
*/
import request from '@/utils/request'
export const article = params => {
  return request({
    method: 'GET',
    url: '/mp/v1_0/articles',
    params
  })
}
