<template>

  <div class='filter_date'>
    <div class='title'>
      <span class='title_name'>自动选择日期：</span><span class='title_date selectedDate' >{{ date }}</span>
    </div>
    <lcalendar-auto 
      @onSelChange='selChange' 
      :showDate='date'
      type='ym'
      minDate='2000-01'
      maxDate='2025-01'
    >
    </lcalendar-auto>
    <div class='title'>
      <span class='title_name'>点击选择日期：</span>
      <lCalendar-input
        :showDate='date2'
        type='date'
      >
      </lCalendar-input>
    </div>
    
  </div>
</template>

<script>
var date = new Date()
var now = date.getFullYear() + '-' + (date.getMonth() + 1)
import LCalendarAuto from '../components/LCalendar-autoModel.vue'
import LCalendar from '../components/LCalendar.vue'

export default {
  components: {
    'lcalendar-auto': LCalendarAuto,
    'lCalendar-input': LCalendar
  },
  data () {
    return {
      date: now, // 当前日期
      date2: ''
    }
  },
  methods: {
    selChange: function (value) {
      console.log(value)
      this.date = value
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  .filter_date{ font-size: 14px; }
  .filter_date .title{ color: #be4040; line-height: 2em;   }
  .filter_date .title_name{ display: inline-block; width: 100px; background-color: #d9d9d9; text-align: center; margin-right: 20px;  }
</style>
