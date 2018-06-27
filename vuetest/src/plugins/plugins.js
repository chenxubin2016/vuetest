/**
 * 自定义插件常用方法
 */
// const myPlugins = {
//   install (Vue, options) {
//     Vue.globalMethod = function () {

//     }
//     Vue.directive('my-directive', {
//       bind (el, binding, vnode, oldVnode) {

//       }
//     })
//     Vue.mixin({
//       created: function () {

//       }
//     })
//     Vue.prototype.$myMethod = function (options) {

//     }
//   }
// }

// const plugins = {
//   install (Vue, options) {
//     Vue.prototype.$myName = 'chenxubin'
//     Vue.prototype.showMyName = value => {
//       console.log(value)
//     }
//   }
// }
import loadingVue from './loading.vue'

let $vm
const loadingPlugins = {
  install (Vue, options) {
    if (!$vm) {
      const LP = Vue.extend(loadingVue)
      $vm = new LP({
        el: document.createElement('div')
      })
      document.body.appendChild($vm.$el)
    }

    $vm.show = false

    let loading = {
      show (text) {
        $vm.show = true
        $vm.text = text || '正在加载中...'
      },
      hide () {
        $vm.show = false
      }
    }

    if (!Vue.$loading) {
      Vue.$loading = loading
    }
    // 全局挂载使用
    Vue.prototype.loading = Vue.$loading
    // Vue.mixin({
    //   created: function () {
    //     this.loading = Vue.$loading
    //   }
    // })
  }
}
export default loadingPlugins
