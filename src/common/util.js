/**
 * @author monkeywang
 * Date: 17/3/14
 */
// need vue
import Vue from 'vue'
// need vue resource, which is $http is the client.
import $http from 'vue-resource'
// vue use this dollar http client
Vue.use($http)
// we inject the http client to Vue, then instance
let vm = new Vue()

// /api path
const configPath = '/api'
// global has this config path
window.configPath = configPath

// utils class
export class Utils {
  // get method, with url and data obj
  // what is url?
  // what is data?
  get (url, data = {}) {
    // api/xxxxx
    url = configPath + url

    return new Promise((resolve, reject) => {
      vm.$http.get(url, {params: data, credentials: true}).then((response) => {
        // url ==== /api/movie/in_theaters
        // data ==== {city: hangzhou}
        // response is very rich
        // count: 20,
        // start: 0,
        // title: where_to_show_movie
        // totla: 22
        // subjects: array
        //
        // each subject
        // alt, is the movie url
        // cast: array
        // collect_count: 4099
        // directors: array... (like image, etc)
        // genres
        // id
        // images
        // rating
        // title
        // year
        // console.log('utils: ', response)

        resolve(response.body)
      }, function () {
        console.log('cannot connect!!!!')
      })
    })
  }

  // 获取滚动条当前的位置
  getScrollTop () {
    let scrollTop = 0
    if (document.documentElement && document.documentElement.scrollTop) {
      scrollTop = document.documentElement.scrollTop
    } else if (document.body) {
      scrollTop = document.body.scrollTop
    }
    return scrollTop
  }
  // 获取当前可是范围的高度
  getClientHeight () {
    let clientHeight = 0
    if (document.body.clientHeight && document.documentElement.clientHeight) {
      clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight)
    } else {
      clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight)
    }
    return clientHeight
  }
  // 获取文档完整的高度
  getScrollHeight () {
    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
  }
}
