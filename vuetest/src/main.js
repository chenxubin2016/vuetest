// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import myPlugins from './plugins/plugins'
import store from './vuex/store'
// 自己封装的组件
// import toast from './components/toast/toast.js'
// ui组件
import 'mint-ui/lib/style.css'
import { Header, Button } from 'mint-ui'

// 组件挂载
Vue.component(Header.name, Header)
Vue.component(Button.name, Button)
// 全局挂载
// Vue.prototype.aa = toast
Vue.config.productionTip = false

Vue.use(myPlugins)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
