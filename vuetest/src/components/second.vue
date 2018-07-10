<template>
  <div class="firstPage">
    <h1>{{msg}}</h1>
    <router-link to='/three'>
      <mt-button type='primary'>点击跳转到第三页</mt-button>
    </router-link>
    <mt-button type='primary' @click="showLoading">显示loading</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '第二页'
    }
  },
  created: function () {
    this.$store.commit('changeHeaderState',{
      title:'我是第二页',
      left:{
        flag:true,
        options:{
          name:'First'
        }
      },
      right:{
        isShow:false
      }
    });
  },
  methods: {
    showLoading: function () {
      this.loading.show()
      setTimeout(() => {
        this.loading.hide()
      }, 3000)
    }
  }
}
</script>
<style>
  .firstPage {
    text-align: center
  }
</style>
