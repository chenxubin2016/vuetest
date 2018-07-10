<template>
  <div class="container">
    <headers :headerMsg='headerMsg' v-on:back='returnPage'></headers>
    <router-view></router-view>
  </div>
</template>
<script>
import header from '@/components/header'
export default {
  name: 'App',
  created: function () {
    this.$store.commit('setDate', '2018-06-27')
  },
  computed: {
    headerMsg: function () {
      return this.$store.state.routerConfig
    }
  },
  components: {
    headers: header
  },
  methods:{
    // 根据routerConfig的配置区分是否将页面记录追加到window.history
    returnPage:function (){
      var routerconfig=this.$store.state.routerConfig;
      if(routerconfig.left.flag){
        this.$router.replace(routerconfig.left.options);
      }else{
        this.$router.go(-1);
      }
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
