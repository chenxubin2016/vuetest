<template>
  <div class="loading-box" v-show="show">
    <div class="loading-mask"></div>
    <div class="loading-content">
      <div class="animate">
        <img src="./loading.gif" alt="">
      </div>
      <div class="text">{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    text: {
      type: String,
      default: '正在加载中...'
    },
    src:{
      type:String,
      default:'./loading.gif'
    }
  },
  creaded: function () {
    console.log(this.text)
    console.log(this.show)
  }
}
</script>

<style scoped lang='less'>
.loading-box {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  .loading-mask {
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }
  .loading-content {
    width: 40vw;
    height: 28vh;
    border-radius: 2vw;
    background-color: rgba(255, 255, 255, 1);
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -20vw;
    margin-top: -14vh;
    .animate {
      width: 100%;
      height: 80%;
      box-sizing: border-box;
      padding: 2vw;
      padding-top: 0;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .text {
      text-align: center;
      color: #333;
    }
  }
}
</style>
