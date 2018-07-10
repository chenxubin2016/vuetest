<template>
  <div class="firstPage">
    <h1>{{msg}}</h1>
    <mt-button type='primary' @click.stop="linkto">点击跳转到第二页</mt-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "第一页"
    };
  },
  created: function() {
    this.$store.commit("changeHeaderState", {
      title: "首页",
      left: {
        flag: true,
        options: {
          name: "First"
        }
      },
      right: {
        isShow: false
      }
    });
  },
  computed: {},
  methods: {
    linkto: function() {
      this.$post(1001,{}).then(response=>{
        console.log(response)
      })
      // this.$router.replace({ name: "Second" });
    }
  }
};
</script>
<style>
.firstPage {
  text-align: center;
}
</style>
