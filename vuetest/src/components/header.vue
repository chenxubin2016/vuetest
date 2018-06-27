<template>
  <div>
    <mt-header :title='headerTitle' >
      <mt-button icon="back" @click.stop="linkTo" slot="left"></mt-button>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
  </div>
</template>

<script>
export default {
  name: 'header-component',
  props: {
    headerTitle: String
  },
  methods: {
    linkTo: function () {
      this.$router.replace({name: 'returnTag'})
    }
  }
}
</script>
