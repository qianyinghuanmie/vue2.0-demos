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
            <mt-cell v-for="(course,index) in courses" :key="course.key" :title="course.text"  :href="course.url" target="_blank"/>
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
          <i class="iconfont">&#xe6c2;</i>
          目录
        </mt-tab-item>
        <mt-tab-item id="教程">
          <i class="iconfont">&#xe606;</i>
          教程
        </mt-tab-item>
        <mt-tab-item id="待定">
          <i class="iconfont">&#xe618;</i>
          待定
        </mt-tab-item>
        <mt-tab-item id="未知">
          <i class="iconfont">&#xe677;</i>
          未知
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  const catalog = [
    {
      url: '#/city',
      text: '0、跳转到城市列表1'
    },
    {
      url: '#/cityMint',
      text: '1、跳转到城市列表2'
    },
    {
      url: '#/map',
      text: '2、跳转到高德地图'
    },
    {
      url: '#/vcharts',
      text: '3、跳转到vcharts图表示例'
    },
    {
      url: '#/uploadImg',
      text: '4、图片预览'
    },
    {
      url: '#/upload',
      text: '5、图片上传'
    },
    {
      url: '#/touch',
      text: '6、仿qq聊天列表'
    },
    {
      url: '#/lcalendar',
      text: '7、时间选择器'
    }
  ]
  const course = [
    {
      url: 'http://www.cnblogs.com/star-wind/p/6913002.html',
      text: '0、动手做个选择城市'
    },
    {
      url: 'http://www.cnblogs.com/star-wind/p/6774204.html',
      text: '1、调用高德地图'
    },
    {
      url: 'http://www.cnblogs.com/star-wind/p/7018817.html',
      text: '2、高德地图之玩转周边'
    },
    {
      url: 'https://github.com/chenyk2016/LCalendar-extension',
      text: '3、时间选择器'
    }
  ]
  export default {
    data () {
      return {
        selected: '目录',
        catalogs: catalog,
        courses: course
      }
    }
  }
</script>

<style  lang="scss">
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
  .mint-tab-item{
      color:#ccc;
      padding: 10px 0;
  }
</style>
