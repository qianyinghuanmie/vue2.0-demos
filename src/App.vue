<template>
  <div id="app">
    <router-view name="top"></router-view>
    <router-view ></router-view>
  </div>
</template>

<script>
</script>

<style lang="scss">
  @import "./assets/scss/font.css";
  html {
    height: 100%;
    font-size: 50px;
  }
  * {
    margin: 0;
    padding: 0;
  }

  body, #app {
    min-height: 100%;
  }

  body {
    font-size: 0.3rem;
  }

</style>
