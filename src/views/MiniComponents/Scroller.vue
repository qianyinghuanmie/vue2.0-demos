<template>
  <div>
    <mt-header title="无限滚动">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="swich_wrap">
        <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10">
      <li v-for="item in list" class="srcollerItem">{{ item }}</li>
    </ul>
    <p class="page-infinite-loading" v-show="textMore" >
      加载中...
    </p>
    <p class="page-infinite-loading" v-show="textNone" >
      没有更多了...
    </p>
    </div>

  </div>
</template>
<script>
const numberList = []
for (var i = 0; i < 20; i++) {
  numberList.push(i)
}
export default {
  name: '',
  data: () => ({
    value: false,
    loading: false,
    textMore: true,
    textNone: false,
    list: numberList
  }),
  methods: {
    loadMore () {
      if (this.list.length > 30) {
        this.textMore = false
        this.textNone = true
        setTimeout(() => {
          this.textMore = false
          this.textNone = false
          this.loading = true
        }, 2500)
      } else {
        this.loading = true
        this.textNone = false
        setTimeout(() => {
          let last = this.list[this.list.length - 1]
          this.loading = false
          this.textMore = true
          for (let i = 1; i <= 10; i++) {
            this.list.push(last + i)
          }
        }, 2500)
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .swich_wrap{
    padding: 1rem 0.3rem;
  }
  ul{
    list-style: none;
  }
  .srcollerItem{
    padding:  0 0.3rem;
    line-height: 1rem;
    border-bottom: 1px solid #999999;
  }
  .page-infinite-loading{
    text-align: center;
  }
</style>
