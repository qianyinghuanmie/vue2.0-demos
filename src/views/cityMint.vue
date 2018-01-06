<template>
  <div id=''>
    <!--头部-->
    <mt-header title="城市列表2">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-index-list>
      <mt-index-section :index="i" v-for="i in listStringArr" :key="i.id">
        <mt-cell :title="i"></mt-cell>
        <mt-cell :title="i"></mt-cell>
        <mt-cell :title="i"></mt-cell>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>
<script>
let listStringArr = []
export default {
  name: '',
  data: () => ({
    listStringArr: listStringArr
  }),
  mounted () {
    // do something after mounting vue instance
    this.listString()
  },
  methods: {
    listString () {
      for (var i = 65; i < 91; i++) {
        listStringArr.push(String.fromCharCode(i))
      }
    }
  }
}
</script>
<style lang='scss' scoped>
</style>
