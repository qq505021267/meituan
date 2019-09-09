import axios from 'axios'
axios.defaults.baseURL = 'http://api.duyiedu.com'
axios.interceptors.request.use(function (config) {
  config.params = {
    ...config.params,
    appkey: 'qq505021267_1555937793859'
  }
  return config
}, function (error) {
  return Promise.reject(error)
})

export default axios
