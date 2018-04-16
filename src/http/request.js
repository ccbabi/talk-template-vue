import { request } from 'axios-add-jsonp'
// 文档地址: https://www.npmjs.com/package/axios-add-jsonp

export const http = {
  getApiXxx () {
    return request.get('/api/xxx')
  }
}

export default {
  install (Vue, options) {
    Vue.prototype.$http = http
  }
}
