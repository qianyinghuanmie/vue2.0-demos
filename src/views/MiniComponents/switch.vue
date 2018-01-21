<template>
  <div>
    <mt-header title="开关">
      <router-link to="/mintUiComponent" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <div class="swich_wrap">
      <mt-switch v-model="value" @change="handleChange(value)">开关</mt-switch>
      <mt-cell title="选中的值" :value="value"></mt-cell>
    </div>

  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({
    value: false
  }),
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>
<style lang="scss" scoped>
  .swich_wrap{
    padding: 1rem 0.3rem;
  }
</style>
