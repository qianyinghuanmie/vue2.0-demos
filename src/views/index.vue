<template>
  <div id="index">
    <!--头部-->
    <div id="uploader"></div>
    <mt-header title="首页">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--内容区域-->
    <div class="page-tabbar">
      <div class="page-wrap">
        <div class="page-title"></div>
        <div>
          <mt-cell class="page-part" title="当前选中" :value="selected" />
        </div>

        <mt-tab-container class="page-tabbar-container" v-model="selected">
          <mt-tab-container-item id="目录">
            <mt-cell v-for="catalog in catalogs" :key="catalog.key" :title="catalog.text"  :href="catalog.url"/>
          </mt-tab-container-item>
          <mt-tab-container-item id="教程">
            <mt-cell v-for="n in 5" :key="n.key" :title="'教程 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="待定">
            <mt-cell v-for="n in 7" :key="n.key" :title="'待定 ' + n" />
          </mt-tab-container-item>
          <mt-tab-container-item id="未知">
            <div class="page-part">
              <mt-cell v-for="n in 12" :key="n.key" :title="'未知 ' + n" />
            </div>
            <router-link to="/">
              <mt-button type="danger" size="large">退出</mt-button>
            </router-link>
          </mt-tab-container-item>
        </mt-tab-container>
      </div>

      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item id="目录">
          <img slot="icon">
          目录
        </mt-tab-item>
        <mt-tab-item id="教程">
          <img slot="icon" >
          教程
        </mt-tab-item>
        <mt-tab-item id="待定">
          <img slot="icon">
          待定
        </mt-tab-item>
        <mt-tab-item id="未知">
          <img slot="icon" >
          未知
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  const catalog = [
    // {
    //   url: '#/city',
    //   text: '跳转到城市列表'
    // },
    {
      url: '#/cityMint',
      text: '跳转到城市列表2'
    },
    {
      url: '#/map',
      text: '跳转到高德地图'
    },
    {
      url: '#/vcharts',
      text: '跳转到vcharts图表示例'
    },
    {
      url: '#/uploadImg',
      text: '图片上传示例'
    },
    {
      url: '#/touch',
      text: '仿qq聊天列表'
    }
  ]
  export default {
    data () {
      return {
        selected: '目录',
        catalogs: catalog
      }
    }
  }
</script>

<style>
  .page-tabbar {
    overflow: hidden;
    height: 100vh;
  }
  .page-wrap {
    overflow: auto;
    height: 100%;
    padding-bottom: 100px;
  }
  .mint-cell{
    border-bottom: 1px solid #ccc;
  }
</style>
