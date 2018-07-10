import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    //日历数据
    defaultMsg:{
      title:'wf',
      flag:true,
      // dateList:[util.formatDate(new Date()),util.getReturnDate(new Date())]
      dateList:['2018-07-22','2018-07-29']
    },
    //路由配置
    routerConfig:{
      title:'',
      left:{
        isShow:true,
        flag:false,
        options:{
          name:''
        }
      },
      right:{
        isShow:true,
        flag:false,
        options:{
          name:''
        }
      }
    }
  },
  mutations: {
    //
    setDate: function (state, value) {
      state.departureDate = value
    },
    //日历数据变更
    changeCalendar:function (state,options){
      state.defaultMsg=Object.assign({},state.defaultMsg,options);
    },
    // 设置header跳转及像是
    changeHeaderState:function (state,options){
      state.routerConfig=Object.assign({},state.routerConfig,options);
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
