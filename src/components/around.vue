
<!--高德地图测试-->
<template>
  <div style="width:100%; height:100%">
    <!--    <header-item message="景瑞城北公园" backUrl="/"></header-item>-->
    <header-item message="地图周边" backUrl="/"></header-item>
    <div id="container" style="width:100%; height:90%"></div>
    <div class="footer_map_buttons">
      <button v-for="(button, index) in buttons" :key="button.id" @click="clickItem(index ,buttons)"
              v-bind:class="[footer_button, {active: button.isActive}]">{{button.title}}

      </button>
    </div>
    <div id="panel"></div>
    <div class="content">
      <div class="content-top">
        <div v-for="list in listText"><span>{{list.name}}</span><span>{{list.distance + '米'}}</span></div>
      </div>
      <div class="content-bottom" @click="listClose">x</div>
    </div>
    <div class="list-button" @click="listOpen">
      <div>({{listCount}})</div>
      <div>查看列表</div>
    </div>
  </div>
</template>
<script>
  import AMap from 'AMap'
  const buttonsIcon = [
    {title: '交通', click: false, isActive: true},
    {title: '生活', click: false, isActive: false},
    {title: '医疗', click: false, isActive: false},
    {title: '学校', click: false, isActive: false}
  ]
  var mapListText = []
  //  var geolocation, markers
  var map, placeSearch, self, placeSearchOptions, listCount, marker
  //  var poisArrr
  var num = []
  var poisArrCopy = []
  var numIndex = 0
  export default {
    components: {},
    mounted: function () {
      let _self = this
      let promise = new Promise(function (resolve, reject) {
        _self.init()
        resolve()
      })
      promise.then(function () {
        _self.searchData(_self.callback)
        _self.demo()
      }).then(function () {
        setTimeout(function () {
          let firstBtn = _self.glob.getClass('footer_button')[0]
          firstBtn.click()
        }, 300)
      })
    },
    data () {
      self = this
      return {
        buttons: buttonsIcon,
        listCount: listCount,
        listText: mapListText,
        center: {lng: 0, lat: 0},
        num: num,
        footer_button: 'footer_button'
      }
    },
    methods: {
      init: function () {
        map = new AMap.Map('container', {
          center: [121.52710487067272, 31.22889232359548],
          resizeEnable: false,
          zoom: 5
        })
        /*       var icon = new AMap.Icon({
         image: 'http://vdata.amap.com/icons/b18/1/2.png',
         size: new AMap.Size(24, 24)
         }) */
        AMap.plugin(['AMap.Geolocation', 'AMap.PlaceSearch', 'AMap.ToolBar'],
          function () {
            map.addControl(new AMap.ToolBar())
          })
      },
      searchData: function (callback) {
        let keyWords = ['地铁线路', '大型购物广场', '三甲医院', '学校']
        let distance = [1000, 3000, 3000, 3000]
        // …………………………………………………………周边分类…………………………………………………………………………………………………………
        placeSearchOptions = { // 构造地点查询类
          pageSize: 10,
          pageIndex: 1,
          city: '021', // 城市
          map: map,
          visible: false
        }
        AMap.service('AMap.PlaceSearch', function () {
          map.clearMap()  // 清除地图覆盖物
          placeSearch = new AMap.PlaceSearch(placeSearchOptions)
          for (let i = 0; i < keyWords.length; i++) {
            placeSearch.searchNearBy(keyWords[i], [121.44343879031237, 31.207570983863118], distance[i], callback)
          }
        })
        return callback
      },
      callback: function (status, result) {
        var promise = new Promise(function (resolve, reject) {
          let _result = result
          const pois = _result.poiList.pois
          poisArrCopy = pois.copyWithin(0)
          self.num.push(poisArrCopy)
//          self.listText = pois
//          self.listCount = _result.poiList.count
//          placeSearch.M.pageSize = 10
          resolve()
        })
        promise.then(function () {
          console.log('Resolved.')
          return self.demo()
        })
      },
      onClick () {
        console.log('on item click:')
      },
      listClose () {
        let content = document.getElementsByClassName('content')[0]
        content.style.visibility = 'hidden'
      },
      listOpen () {
        let content = document.getElementsByClassName('content')[0]
        content.style.visibility = 'visible'
      },
      demo: function () {
        numIndex++
        if (numIndex > 4) {
          if (self.num.length > 0) {
            return map.clearMap()  // 清除地图覆盖物
          }
        }
      },
      /*  注册每项的点击事件,默认显示num0，也就是交通，实际上所有的数据已经请求到了，点击按钮只是用来切换maker */
      clickItem: function (index, buttons) {
        map.clearMap()  // 清除地图覆盖物
        buttons.forEach(function (e, index) {
          e.isActive = false
        })
        buttons[index].isActive = true
        self.listCount = self.num[index].length
        self.listText = self.num[index]
        function onClick (e) {
          console.log(e)
        }
        for (let i = 0; i < self.num[index].length; i++) {
          marker = new AMap.Marker({
//            content: 'div',
            title: 'abc',
            icon: 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b' + (i + 1) + '.png',
            position: [self.num[index][i].location.lng, self.num[index][i].location.lat],
            offset: new AMap.Pixel(-24, 5),
            zIndex: 1,
            map: map,
            clickable: true
          })
          AMap.event.addListener(marker, 'click', onClick)
        }
        return marker
      }
    }
  }
</script>
<style lang="less">

</style>
