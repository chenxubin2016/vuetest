import axios from 'axios';
import qs from 'qs';
var baseURL = 'http://hotel.m.hnair.com/hainanair/MobOpenJawServer/ws/api/openjaw';
axios.defaults.timeout = 5 * 1000;
axios.defaults.baseURL = baseURL;
// http request拦截器
axios.interceptors.request.use(
  config => {
    config.data ={para:config.data};
    config.headers = {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// http response 拦截器
axios.interceptors.response.use(
  response => {

    return response;
  },
  error => {
    return Promise.reject(error);
  }
)


/**
 *get方法封装
 *
 * @export
 * @param {*} url
 * @param {*} [params={}]
 * @returns
 */
export function get (url, params = {}) {
  return new Promise(
    (resolve, reject) => {
      axios.get(url, {
        params: params
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(err => {
          reject(err)
        })
    }
  )
}

/**
 *post封装
 *
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns
 */
export function post (pid,rpara = {}) {
  let data={
    "header": {
      "pid": pid,
      "sid": this.$store.state.sid||''
    },
    "rpara": rpara
  }
  return new Promise((resolve, reject) => {
    axios.post('', data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 *patch封装
 *
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns
 */
export function patch (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}

/**
 *put封装
 *
 * @export
 * @param {*} url
 * @param {*} [data={}]
 * @returns
 */
export function put (url, data = {}) {
  return new Promise((resolve, reject) => {
    axios.put(url, data)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err)
      })
  })
}