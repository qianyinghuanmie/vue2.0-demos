<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style lang="less">
  @base: 37.5rem;
  @multiple: 2;
  @borderColorBottom: #f2f2f2;
  #app {
    padding-top: 80/@base;
/*    text-align: center;
    color: #2c3e50; */
  }
  a{
    text-decoration: none;
  }
  header {
    display: -webkit-flex;
    display: flex;
    line-height: 80/@base;
    border-bottom: 1px solid @borderColorBottom;
    position: fixed;
    left:0;
    top: 0;
    width: 100%;
    background: #FFFFFF;
  > a {
      width: 7%;
      font-size: 20px;
      text-align: center;
    }
  img {
    width: 100%;
    vertical-align: middle;
  }
  div:nth-child(1) {
    width: auto;
  }
  div:nth-child(2) {
    width: 90%;
    text-align: center;
  }
  div:nth-child(3) {
    width: 5%;
    text-align: right;
  }
  }
</style>
