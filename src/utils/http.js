/**
 * 针对业务对axios做简单的封装
 */
import axios from 'axios'
import local from '@/utils/local'
import { message } from 'antd';
const axiosInstance = axios.create({
  timeout: 20 * 1000
})

axiosInstance.interceptors.request.use(
  config => {
    config.headers.Authentication = local.get('token') || ''
    config.headers.userId = local.get('userId') || ''
    return config
  },
  error => {
    Promise.reject(error)
  }
)
const httpInstance = {
  handleResponse(instance, options = {}) {
    const { silent } = options
    return new Promise((resolve, reject) => {
      instance.then(response => {
        // TODO 后台接口并没有遵循接口规范
        const responseData = response.data
        if (responseData.errmsg) {
          message.error(responseData.errmsg)
          reject({ code: responseData.errcode, message: responseData.errmsg })
        } else {
          resolve(responseData)
        }
      }).catch(err => {
        if (err.code === 'ECONNABORTED') { // 超时
          if (!silent) {
            message.error('请求超时')
          }
          reject({ message: '请求超时' })
        } else {
          const statusCode = err.response.status
          if (statusCode === 401) {
            const resM = err.response.data.message || '请重新登陆'
            message.error(resM)
            // setTimeout(() => {
            //   logout()
            // }, 1000)
          } else if (statusCode === 403) {
            let errorResponse = ''
            errorResponse = '权限不足，请联系管理员'
            reject({ code: statusCode, message: errorResponse })
          } else {
            let errorResponse = ''
            if (statusCode === 500) {
              errorResponse = err.response.data.message || '网络异常'
            } else {
              errorResponse = err.response.data.message
            }
            reject({ code: statusCode, message: errorResponse })
            message.error(errorResponse || '哎呀 网络塞车了 请客官重新操作')
          }
        }
      })
    })
  },
  get(url, options) {
    return this.handleResponse(axiosInstance.get(url, options))
  },
  post(url, data, options) {
    return this.handleResponse(axiosInstance.post(url, data, options))
  },
  put(url, data, options) {
    return this.handleResponse(axiosInstance.put(url, data, options))
  },
  delete(url, options) {
    return this.handleResponse(axiosInstance.delete(url, options))
  }
}

const http = httpInstance
export default http