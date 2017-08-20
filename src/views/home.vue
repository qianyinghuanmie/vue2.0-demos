<template>
  <div id="home">
    <img src="../assets/img/logo.png">
    <div class="in">
      <router-link to="./index">
        <mt-button plain>进入demos</mt-button>
      </router-link>
    </div>


  </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
  #home{
    text-align: center;
    padding-top: 1rem;
  }
  .in {
    width: 50%;
    margin: 0 auto;
    font-size: 0.6rem;
    button{
      border-color: green;
    }
  }
</style>
