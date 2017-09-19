<template>
  <div id="">
    <ul>
      <li v-for="i in [1,2,3,4,5,6,7,8,9]" :key="i.id" class="myLi"></li>
    </ul>
  </div>
</template>
<script>
export default {
  name: '',
  data: () => ({

  }),
  methods: {
    slidePage() {
      //先设置一个空字符串保存要添加的结构
      // 设定每一行的宽度=屏幕宽度+按钮宽度
      $(".otherPerson_every_scroll").width($(".otherPerson_every").width() + $(".otherPerson_delete").width());
      // 获取所有行，对每一行设置监听
      var lines = $(".otherPerson_info");
      var len = lines.length;
      var lastX, lastXForMobile;

      // 用于记录被按下的对象
      var pressedObj;  // 当前左滑的对象
      var lastLeftObj; // 上一个左滑的对象

      // 用于记录按下的点
      var start;

      // 网页在移动端运行时的监听
      for (var i = 0; i < len; ++i) {
          lines[i].addEventListener('touchstart', function (e) {
              //记录每个触屏开始的事件
              lastXForMobile = e.changedTouches[0].pageX;
              pressedObj = this; // 记录被按下的对象

              // 记录开始按下时的点
              var touches = event.touches[0];
              //收集按下的横坐标和纵坐标
              start = {
                  x: touches.pageX, // 横坐标
                  y: touches.pageY  // 纵坐标
              };
          });

          lines[i].addEventListener('touchmove', function (e) {
              //记录每个触屏移动的事件
              // 计算划动过程中x和y的变化量
              var touches = event.touches[0];
              //开始的横坐标的和纵坐标减去触屏时候的横坐标和纵坐标
              delta = {
                  x: touches.pageX - start.x,
                  y: touches.pageY - start.y
              };

              // abs绝对值  横向位移大于纵向位移，阻止纵向滚动
              if (Math.abs(delta.x) > Math.abs(delta.y)) {
                  event.preventDefault();
              }
          });

          lines[i].addEventListener('touchend', function (e) {
              //记录手指从触屏上拿起的事件。
              var diffX = e.changedTouches[0].pageX - lastXForMobile;
              if (diffX < -10) {
                  $(pressedObj).animate({marginLeft: "-21.3%"}, 300); // 左滑
                  lastLeftObj && lastLeftObj != pressedObj &&
                  $(lastLeftObj).animate({marginLeft: "0"}, 300); // 已经左滑状态的按钮右滑
                  lastLeftObj = pressedObj; // 记录上一个左滑的对象
              } else if (diffX > 10) {
                  $(pressedObj).animate({marginLeft: "0"}, 300); // 右滑
                  lastLeftObj = null; // 清空上一个左滑的对象
              }
          });
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.myLi{
  width: 100%;
  height: 20px;
}
</style>
