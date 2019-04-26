<template>
<div>
  <!--头部-->
  <mt-header title="关于vuex小例子">
    <router-link to="/index" slot="left">
      <mt-button icon="back">返回</mt-button>
    </router-link>
    <mt-button icon="more" slot="right"></mt-button>
  </mt-header>
  <h2>Products</h2>
  <ProductList/>
  <hr>
  <ShoppingCart/>
</div>
</template>
<script>
import ProductList from '../components/ProductList.vue'
import ShoppingCart from '../components/ShoppingCart.vue'
export default {
  name: '',
  components: { ProductList, ShoppingCart },
  data: () => ({
  }),
  methods: {

  }
}
</script>
<style lang="scss" scoped>

</style>
