<template>
  <div id="city">
    <header-item message="城市列表" backUrl="/"></header-item>
    <div class="search-city"><input type="text" placeholder="请输入要搜索的城市" v-model="citySearch" :value="citySearch"></div>
    <div>
      <div id="showCityContent"></div>
      <div v-for="item in showCity" class="letter-item">
        <div><a :id="item.letter">{{item.letter}}</a></div>
        <div v-for="i in item.citylist">{{i}} </div>
      </div>
    </div>
    <aside class="letter-aside">
      <ul>
        <li v-for="item in showCity" @click="naver(item.letter)">{{item.letter}} </li>
      </ul>
    </aside>
    <div id="tip">
      {{tipString}}
    </div>
  </div>
</template>

<script>
  import pinyin from 'pinyin'
  var cityLists = []
  var cityNames = []
  var cityNamesFilter = []
  var letter = []
  var countPage = 0
  var tipLetter = ''
  var citySearch = ''
  var showCity = []
  var showCityList = []
  var showCityTemp
  export default {
    beforeCreated: function () {
    },
    updated: function () {

    },
    created: function () {
      countPage++
      if (countPage < 2) {
        this.$http.get('./static/city.json').then(response => {
          // get status
          let cityList = response.body.provinces
          for (let i in cityList) {
            cityLists = cityList[i].citys
            for (let j in cityLists) {
              cityNames.push(cityLists[j].citysName)
            }
          }
          cityNamesFilter = cityNames
          this.cityFilter(this.citySearch)
          this.someData = response.data.body
        }, response => {
        })
      }
    },
    mounted: function () {
    },
    methods: {
      buildLetter: function () {  // 构建字母项
        letter = []
        for (let i = 0; i < 26; i++) {
          let obj = {}
          obj.letter = String.fromCharCode((65 + i))
          obj.citylist = []
          letter.push(obj)
        }
      },
      getFirstLetter: function (str) { //  得到城市第一个字的首字母
        return pinyin(str)[0][0].charAt(0).toUpperCase()
      },
      buildItem: function (cityNamesFilter) {  // 构建城市
        this.buildLetter()
        let _this = this
        for (let i = 0; i < 26; i++) {
          letter[i].citylist = []
        }
        for (let i = 0; i < cityNamesFilter.length; i++) {
          let _index = Number(_this.getFirstLetter(cityNamesFilter[i]).charCodeAt() - 65)
          if (_index >= 0 && _index < 26) {
            letter[_index].citylist.push(cityNamesFilter[i])
          }
        }
        // 如果letter中citylist中没有值的话，过滤这一项
        showCity = showCityTemp = letter.filter(function (value) {
          let len = value.citylist.length
          return len > 0
        })
      },
      naver: function (id) { // 点击右边字母滚动
        this.tipString = id
        let obj = document.getElementById(id)
        let tip = document.getElementById('tip')
        tip.setAttribute('class', 'tipAppear')
        setTimeout(function () {
          tip.removeAttribute('class')
        }, 500)
        let oPos = obj.offsetTop
        return window.scrollTo(0, oPos - 36)
      },
      cityFilter: function (city) {  // 城市搜索筛选
        let showCityListTemp
        this.buildItem(cityNamesFilter)
        showCity = showCityTemp
        showCity = showCity.filter(function (value) {
          showCityList = value.citylist
          showCityListTemp = showCityList.filter(function (val) {
            return (val.indexOf(city) > -1)
          })
          value.citylist = showCityListTemp
          return value.citylist.length > 0
        })
        this.showCity = showCity
        if (showCity.length === 0) {
          let _showCityContent = document.getElementById('showCityContent')
          _showCityContent.innerText = '查询不到结果'
          _showCityContent.setAttribute('class', 'tipShow')
        } else {
          document.getElementById('showCityContent').innerText = ''
        }
      }
    },
    data () {
      return {
        cityNames: cityNamesFilter,
        letter: letter,
        tipString: tipLetter,
        citySearch: citySearch,
        showCity: showCity
      }
    },
    watch: {
      citySearch: function (newCitySearch) {
        this.cityFilter(newCitySearch)
      }
    }
  }
</script>

<style lang="less">
  * {
    margin: 0;
    padding: 0;
  }

  #city {
    position: relative;
  }

  .letter-item {
    > div:first-child {
      font-size: 16px;
      line-height: 2em;
      background: #eee;
      margin-bottom: 2px;
    }
    > div {
      padding-right: 10%;
      padding-left: 10%;
      border-bottom: 1px solid #f2f2f2;
    }
  }

  .letter-aside {
    position: fixed;
    right: 10px;
    top: 30px;
    ul {
      list-style: none;
      line-height: 1.4em;
      font-size: 14px;
      color: #aaa;
    }
  }

  #tip {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    border: 1px solid #333333;
    width: 100px;
    height: 100px;
    z-index: 10;
    text-align: center;
    line-height: 100px;
    font-size: 50px;
    opacity: 0;
  }

  .tipAppear {
    animation: appearTip 1 linear 0.5s;
  }

  @keyframes appearTip {
    0% {
      opacity: 1;
    }
    80% {
      opacity: 0.5;
    }
    100% {
      opacity: 0;
    }
  }

  .search-city {
    text-align: center;
    padding: 5px 0;
    input {
      line-height: 24px;
      border-radius: 5px;
      outline: none;
    }
  }

  .tipShow {
    text-align: center;
    line-height: 60px;
    font-size: 16px;
    color: #bbbbbb;
  }
</style>
