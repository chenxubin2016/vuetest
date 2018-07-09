import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: '',
    //日历数据
    defaultMsg:{
      title:'wf',
      flag:true,
      // dateList:[util.formatDate(new Date()),util.getReturnDate(new Date())]
      dateList:['2018-07-22','2018-07-29']
    }
  },
  mutations: {
    changeTitle: function (state, value) {
      state.title = value
    },
    setDate: function (state, value) {
      state.departureDate = value
    },
    //日历数据变更
    changeCalendar:function (state,options){
      state.defaultMsg=options;
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
