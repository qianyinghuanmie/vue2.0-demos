<template>
  <div>
    <mt-header title="mintUi好用的组件集合">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <mt-tab-container>
      <mt-tab-container-item>
        <mt-cell v-for="n in catalogs" :title="n.text" :href="n.url"/>
      </mt-tab-container-item>
    </mt-tab-container>
  </div>
</template>
<script>
const catalog = [
  {
    url: '#/cityMint',
    text: '1、城市选择'
  },
  {
    url: '#/mintUiCityPicker',
    text: '2、二级省市联动'
  }
]
export default {
  data: () => ({
    catalogs: catalog
  })
}
</script>
<style lang="scss" scoped>
</style>
