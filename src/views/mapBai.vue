<!-- <template>
<div>
  <div id="allmap"></div>
</div>
</template>
<script>
import MP from '../components/MapComponent.js'
export default {
  mounted () {
    this.$nextTick(function () {
      MP('PAC36df4Z8CP5VIuY85wwVXMaZoW0FP').then(BMap => {
        var map = new BMap.Map('allmap') // 创建Map实例
        var point = new BMap.Point(116.404, 39.915) // 创建点坐标
        map.centerAndZoom(point, 15)
        map.enableScrollWheelZoom()
      })
    })
  }
}
</script>
<style lang="scss" scoped>
#allmap {
    width: 500px;
    height: 500px;
    margin: 0;
    font-family: "微软雅黑";
}
</style> -->
