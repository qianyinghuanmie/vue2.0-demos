<template>
  <div>
    <!--头部-->
    <mt-header title="图片预览">
      <router-link to="/index" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>
    <!--demo示例-->
    <div class="hello">
      <picture-input ref="pictureInput" @change="onChange" width="600" height="600" margin="16" accept="image/jpeg,image/png" size="10" buttonClass="btn" :customStrings="{upload: '<h1>Bummer!</h1>',
       drag:  'Drag a 😺 GIF or GTFO'
      }">
      </picture-input>
    </div>
  </div>
</template>

<script>
  import PictureInput from 'vue-picture-input'

  export default {
    name: 'app',
    data () {
      return {}
    },
    components: {
      PictureInput
    },
    methods: {
      onChange () {
        console.log('New picture selected!')
        if (this.$refs.pictureInput.image) {
          console.log('Picture loaded.')
        } else {
          console.log('FileReader API not supported: use the <form>, Luke!')
        }
      }
    }
  }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
