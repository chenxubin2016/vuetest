<template>
  <div class="firstPage">
    <h1>{{msg}}</h1>
    <router-link to='/four'>
      <mt-button type='primary'>点击跳转到第四页</mt-button>
    </router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '第三页'
    }
  },
  created: function () {
    this.$store.commit('changeHeaderState',{
      title:'第三页',
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
  }
}
</script>
<style>
  .firstPage {
      text-align: center
  }
</style>
