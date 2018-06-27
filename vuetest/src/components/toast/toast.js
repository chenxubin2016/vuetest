import Vue from 'vue'
import Toast from '@/components/toast/toast'

let ToastConstructor = Vue.extend(Toast)

let myToast = (text, duration) => {
  let toastDom = new ToastConstructor({
    el: document.createElement('div')
  })
  document.body.appendChild(toastDom.$el)
  toastDom.text = text || 'hello'
  toastDom.duration = duration || 2000

  setTimeout(() => {
    toastDom.isShow = false
  }, toastDom.duration)
}

export default myToast
