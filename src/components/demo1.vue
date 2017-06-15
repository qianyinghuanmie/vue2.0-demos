<template>
  <div id="index">
    <header-item message="我是demo1头部" backUrl="/"></header-item>
    <h3>目录</h3>
    <div v-for="(item, index) in catalogs" class="catalog-item">
      <label><{{index+1}}>&nbsp;&nbsp;&nbsp;&nbsp;</label><router-link :to="item.url">{{item.text}}</router-link>
    </div>
    <!--<a href="./about.html">从index跳转到about</a>-->
  </div>
</template>

<script>
  const catalog = [
    {
      url: '/city',
      text: '跳转到城市列表'
    },
    {
      url: '/around',
      text: '跳转到高德地图'
    },
    {
      url: '/demo2',
      text: '跳转到demo2'
    }
  ]
  export default {
    data () {
      return {
        catalogs: catalog
      }
    }
  }
</script>

<style lang="less">
  #index{
    h3{
      text-align: center ;
    }
    .catalog-item{
      line-height:2em;
    }
  }
</style>
