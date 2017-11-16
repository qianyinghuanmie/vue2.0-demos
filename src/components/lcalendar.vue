<template>
  <input class="selectedDate" :value='showDate' readonly>
</template>
<script>
/* eslint-disable */
import '../../static/lib/LCalendar/LCalendar.js'
export default {
  name: '',
  props: {
    // 传入当前需要显示的时间
    showDate: {
      type: String
    },
    // 可选择最小日期
    minDate: {
      type: String,
      default: ''
    },
    // 可选择最大日期
    maxDate: {
      type: String,
      default: ''
    },
    // 时间选择的类型
    type: {
      type: String,
      default: 'date'
    }
  },
  data () {
    return {
    }
  },
  mounted: function (res) {
    // 时间选择器
    var _vue = this
    /* global LCalendar */
    var calendar = new LCalendar()
    calendar.init({

      'trigger': this.$el, // 时间显示标签元素（auto模式下不能为表单元素，非auto模式下为input元素）
      'type': this.type, // date 调出日期选择, datetime 调出日期时间选择, time 调出时间选择, ym 调出年月选择
      'minDate': this.minDate, // 最小日期 注意：该值会覆盖标签内定义的日期范围
      'maxDate': this.maxDate,  // 最大日期 注意：该值会覆盖标签内定义的日期范围
      
    })
    calendar.onChange = function (value) {
      // console.log(value);
      _vue.$emit('onSelChange', value)
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  @import '../../static/lib/LCalendar/LCalendar.css';
</style>