import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: ''
  },
  mutations: {
    changeTitle: function (state, value) {
      state.title = value
    },
    setDate: function (state, value) {
      state.departureDate = value
    }
  },
  getters: {
  },
  actions: {

  },
  plugins: [
    createPersistedState({
      storage: window.sessionStorage
    })
  ]
})
export default store
