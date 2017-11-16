<template>
  <mt-header :title="title" class="topTitle">
    <router-link to="/index" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
</template>

<script>
export default {
  props: ['title'],
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topTitle{}
</style>