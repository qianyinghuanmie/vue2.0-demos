<template>
  <div id="">
    <!--头部-->
    <mt-header title="仿qq列表">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--内容区域-->
    <div class="wrapper">
      <div  v-for="item in list" key='i.id' class="item">
        <v-touch
          v-on:panstart="onPanStart($event)"
          v-bind:pan-options="{ direction: 'horizontal', threshold: 100 }">
          <label for="">{{item.name}}</label>
          <span class="item-text">描述：{{item.description}}</span>
          <span class="item-delete" @click = "deleteItem">删除</span>
        </v-touch>
      </div>
    </div>
  </div>
</template>
<script>
import {
  MessageBox
} from 'mint-ui'
const list = [
  {name: '项目1', description: '这是一个引入了vue-touch的项目'},
  {name: '项目2', description: '这是一个引入了vue-touch的项目'},
  {name: '项目3', description: '这是一个引入了vue-touch的项目'}
]
export default {
  name: '',
  data: () => ({
    list: list
  }),
  methods: {
    deleteItem () {
      MessageBox({title: '提示', message: '确定执行此操作?', showCancelButton: true}).then(action => {
        if (action === 'cancel') {
          console.log(1)
        } else if (action === 'confirm') {
          console.log(2)
        }
      })
    },
    onPanStart (event) {
    // this.$refs.tapper.enable('tap')
      console.log(event.overallVelocity)
      let xMove = event.overallVelocity
      if (xMove > 0) {
        event.target.parentNode.parentNode.className = 'item'
      } else if (xMove < -0.2) {
        let allProductSort = event.target.parentNode.parentNode.parentNode.childNodes
        console.log(allProductSort)
        for (var i = 0; i < allProductSort.length; i++) {
          allProductSort[i].className = 'item'
        }            // value.className = 'productSort'
        event.target.parentNode.parentNode.className = 'item move'
      }
      console.log(event.target.parentNode.className)
    }
  }
}
</script>
<style lang="scss" scoped>
.wrapper{
  padding-top: 1rem;
  background-color: #ddd;
  overflow-x: hidden;
  >div{
    line-height: 1rem;
  }
}
.item{
  width: 100%;
  line-height: 1rem;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  >div{
    display: flex;
    justify-content: space-between;
    border: none;
    >label{
      width: 20%;
      font-size: 0.28rem;
      font-weight: bold;
      background-color: #f3f3f3;
    }
  }
  .item-delete{
    width: 80px;
    margin-right: -80px;
    background-color: red;
    color: #fff;
    text-align: center;
  }
  .item-text{
    width: 75%;
    text-align: left;
    padding-left: 5%;
  }
}
.move{
    margin-left: -80px;
    // animation: moveAnimate 0.5s 1;
    // -webkit-animation:moveAnimate 0.5s 1; /* Safari 和 Chrome */
}
</style>
