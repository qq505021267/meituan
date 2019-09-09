import Axios from '@/axios'

const URLs = {
  searchHotWords: '/api/meituan/header/searchHotWords.json',
  getSearchList: '/api/meituan/header/search.json',
  getMenuList: '/api/meituan/index/nav.json',
  getResultProducts: '/api/meituan/index/resultsByKeywords.json',
  getGoodsList: '/api/meituan/list/goodsList.json',
  getClassifyList: '/api/meituan/list/classify.json',
  getAreaList: '/api/meituan/list/areaList.json',
  getHotCity: '/api/meituan/city/hot.json',
  getRecentsCity: '/api/meituan/city/recents.json',
  getProvince: '/api/meituan/city/province.json',
  getCurPosition: '/api/meituan/city/getPosition.json',
  getCityList: 'api/meituan/city/cityList.json',
  login: 'api/meituan/login',
  register: 'api/meituan/register',
  getFavoriteList: '/api/meituan/list/recommend.json'
}

const api = {
  searchHotWords () {
    return Axios.get(URLs.searchHotWords)
  },
  getSearchList () {
    return Axios.get(URLs.getSearchList)
  },
  getMenuList () {
    return Axios.get(URLs.getMenuList)
  },
  resultsByKeywords () {
    return Axios.get(URLs.getResultProducts)
  },
  getProductsList () {
    return Axios.get(URLs.getGoodsList)
  },
  getClassifyList () {
    return Axios.get(URLs.getClassifyList)
  },
  getAreaList () {
    return Axios.get(URLs.getAreaList)
  },
  getHotCity () {
    return Axios.get(URLs.getHotCity)
  },
  getRecentsCity () {
    return Axios.get(URLs.getRecentsCity)
  },
  getProvince () {
    return Axios.get(URLs.getProvince)
  },
  getCurPosition () {
    return Axios.get(URLs.getCurPosition)
  },
  getCityList () {
    return Axios.get(URLs.getCityList)
  },
  login (params) {
    return Axios.get(URLs.login, {params})
  },
  register (params) {
    return Axios.get(URLs.register, {params})
  },
  getFavoriteList () {
    return Axios.get(URLs.getFavoriteList)
  }
}

export default api
