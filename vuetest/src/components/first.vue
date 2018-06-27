<template>
  <div class="firstPage">
    <h1>{{msg}}</h1>
    <mt-button type='primary' @click.stop="linkto">点击跳转到第二页</mt-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      msg: '第一页'
    }
  },
  created: function () {
    this.$store.commit('changeTitle', '首页')
  },
  computed: {},
  methods: {
    linkto: function () {
      this.$router.replace({name: 'Second'})
    }
  }
}
</script>
<style>
.firstPage {
  text-align: center;
}
</style>
