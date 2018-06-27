<template>
  <div class="firstPage">
    <h1>{{msg}}</h1>
    <mt-button type='primary' @click.stop="linkto">点击跳转到第一页</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '第四页'
    }
  },
  methods: {
    linkto: function () {
      this.$router.replace({name: 'First'})
    }
  }
}
</script>
<style>
  .firstPage {
      text-align: center
  }
</style>
