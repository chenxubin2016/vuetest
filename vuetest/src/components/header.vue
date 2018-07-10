<template>
  <div>
    <mt-header :title='headerMsg.title' class="header">
      <mt-button icon="back" @click.stop="linkTo" slot="left"></mt-button>
      <mt-button icon="more" slot="right" v-show="headerMsg.right.isShow"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  props: {
    headerMsg: Object
  },
  created:function(){
  },
  methods: {
    linkTo: function () {
        this.$emit('back');
      // this.$router.replace({name: 'returnTag'})
    }
  }
}
</script>
<style lang='less'>
  .mint-header.header{
    height: 2.2rem;
    background-color: #f4f4f4;
    display: flex;
    align-items: center;
    .mint-button{
      height: 2.2rem;
      color:#444d54;
      .mintui{
        font-size: 1rem;
      }
    }
    .mint-header-title{
      font-size: 0.9rem;
      color: #333;
    }
  }
</style>
