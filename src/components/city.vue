<template>
  <div id="city">
    <header-item message="城市列表" backUrl="/"></header-item>
    <div>
      <div v-for="item in letter" class="letter-item">
        <div><a :id="item.letter">{{item.letter}}</a></div>
        <div v-for="i in item.citylist">{{i}} </div>
      </div>
    </div>
    <aside class="letter-aside">
      <ul>
        <li v-for="item in letter" @click="naver(item.letter)">{{item.letter}} </li>
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
  export default {
    beforeCreated: function () {
    },
    created: function () {
      countPage++
      if (countPage < 2) {
        this.$http.get('/static/city.json').then(response => {
          // get status
          let cityList = response.body.provinces
          for (let i in cityList) {
            cityLists = cityList[i].citys
            for (let j in cityLists) {
              cityNames.push(cityLists[j].citysName)
            }
          }
          this.buildLetter()
          cityNamesFilter = cityNames
          this.buildItem(cityNamesFilter)
          this.someData = response.data.body
        }, response => {
        })
      }
    },
    mounted: function () {
    },
    methods: {
      buildLetter: function () {
        for (let i = 0; i < 25; i++) {
          let obj = {}
          obj.letter = String.fromCharCode((65 + i))
          obj.citylist = []
          letter.push(obj)
        }
      },
      getFirstLetter: function (str) {
        return pinyin(str)[0][0].charAt(0).toUpperCase()
      },
      buildItem: function (cityNamesFilter) {
        let _this = this
        for (let i = 0; i < cityNamesFilter.length; i++) {
          let _index = Number(_this.getFirstLetter(cityNamesFilter[i]).charCodeAt() - 65)
          if (_index > 0 && _index < 25) {
            letter[_index].citylist.push(cityNamesFilter[i])
          }
        }
      },
      naver: function (id) {
        this.tipString = id
        let obj = document.getElementById(id)
        let tip = document.getElementById('tip')
        tip.setAttribute('class', 'tipAppear')
        setTimeout(function () {
          tip.removeAttribute('class')
        }, 500)
        let oPos = obj.offsetTop
        return window.scrollTo(0, oPos - 36)
      }
    },
    data () {
      return {
        cityNames: cityNamesFilter,
        letter: letter,
        tipString: tipLetter
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
</style>
