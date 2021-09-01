import axios from 'axios'
const apiPrefix = '/api/admin/auth/'

export const getLoginInfo:any = (params={}, config = {}) => {
  return axios.get(apiPrefix + 'getUserInfo', { params: params, ...config })
}
