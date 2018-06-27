<template>
  <div class="container">
    <headers :header-title= 'title'></headers>
    <router-view></router-view>
  </div>
</template>
<script>
import header from '@/components/header'
export default {
  name: 'App',
  computed: {
    title: function () {
      return this.$store.state.title
    }
  },
  components: {
    headers: header
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }
</style>
