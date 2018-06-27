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
    this.$store.commit('changeTitle', '第三页')
  }
}
</script>
<style>
  .firstPage {
      text-align: center
  }
</style>
