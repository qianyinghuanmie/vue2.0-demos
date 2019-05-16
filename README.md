
<h2>vue一些知识点整理</h2>

- [vue生命周期](#vue生命周期)
- [vue原理解析](#vue原理解析)
- [vue与react对比](#vue与react对比)
- [vue服务端渲染](#vue服务端渲染)
- [vue常用的一些方法](#vue常用的一些方法)

### vue生命周期
图片来源 https://segmentfault.com/a/1190000008010666

![vue生命周期](/img/demo-1.png)
### vue原理解析
  - [mvvm篇](https://github.com/qianyinghuanmie/interestingJs/tree/master/mvvm)
### vue与react对比

  参考[Vue与React比较](https://cn.vuejs.org/v2/guide/comparison.html)
  - 生命周期的不同
  - 模板的不同  JSX vs Templates
  - 状态管理 vs 对象属性

    *React在state状态管理存储数据的，不能修改数据，修改数据在Setstate中setState是异步的，如果需要马上利用结果，需要在setState传入回调，具体可以看看React中setState几个现象---先知道再理解在Vue中，state对象并不是必须的，数据由data属性在Vue对象中进行管理。*`

### vue服务端渲染

  - [Vue.js 服务器端渲染指南](https://ssr.vuejs.org/zh#%E4%BB%80%E4%B9%88%E6%98%AF%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%AB%AF%E6%B8%B2%E6%9F%93-ssr-%EF%BC%9F)
  - [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0/)

### vue常用的一些方法

  - vue指令

    ```
      // 注册一个全局自定义指令 `v-focus`
      Vue.directive('focus', {
      // 当被绑定的元素插入到 DOM 中时……
      inserted: function (el) {
        // 聚焦元素
        el.focus()
      }
    })

    ```

  - vue实例还暴露了一些有用的实例属性与方法

    举例

    ```
      var data = { a: 1 }
      var vm = new Vue({
        el: '#example',
        data: data
      })

      vm.$data === data // => true
      vm.$el === document.getElementById('example') // => true

      // $watch 是一个实例方法
      vm.$watch('a', function (newValue, oldValue) {
        // 这个回调将在 `vm.a` 改变后调用
      })

    ```
    暴露出来属性和方法

      方法|描述|补充
      --|:--:|:--:
      vm.$props|当前组件接收到的 props 对象。Vue 实例代理了对其 props 对象属性的访问。|2.2.0 新增
      vm.$el|Vue 实例使用的根 DOM 元素。
      vm.$options|用于当前 Vue 实例的初始化选项。需要在选项中包含自定义属性时会有用处：
      vm.$parent|父实例，如果当前实例有的话。
      vm.$root|当前组件树的根 Vue 实例。如果当前实例没有父实例，此实例将会是其自己。
      vm.$children|当前实例的直接子组件。需要注意 $children 并不保证顺序，也不是响应式的。如果你发现自己正在尝试使用 $children 来进行数据绑定，考虑使用一个数组配合 v-for 来生成子组件，并且使用 array 作为真正的来源。
      vm.$slots|用来访问被插槽分发的内容。每个具名插槽 有其相应的属性 (例如：slot="foo" 中的内容将会在 vm.$slots.foo 中被找到)。default 属性包括了所有没有被包含在具名插槽中的节点。
      vm.$scopedSlots|用来访问作用域插槽。对于包括 默认 slot 在内的每一个插槽，该对象都包含一个返回相应 VNode 的函数。
      vm.$refs|一个对象，持有注册过 ref 特性 的所有 DOM 元素和组件实例。
      vm.$isServer|当前 Vue 实例是否运行于服务器。
      vm.$attrs|包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。当一个组件没有声明任何 prop 时，这里会包含所有父作用域的绑定 (class 和 style 除外)，并且可以通过 v-bind="$attrs" 传入内部组件——在创建高级别的组件时非常有用。
      vm.$listeners|包含了父作用域中的 (不含 .native 修饰器的) v-on 事件监听器。它可以通过 v-on="$listeners" 传入内部组件——在创建更高层次的组件时非常有用。
      vm.$watch( expOrFn, callback, [options] )|观察 Vue 实例变化的一个表达式或计算属性函数。回调函数得到的参数为新值和旧值。表达式只接受监督的键路径。对于更复杂的表达式，用一个函数取代。
      vm.$isServer|当前 Vue 实例是否运行于服务器。
      vm.$set( target, key, value )|设置的值。
      vm.$delete( target, key )|这是全局 Vue.delete 的别名。
      vm.$on( event, callback )|监听当前实例上的自定义事件。事件可以由vm.$emit触发。回调函数会接收所有传入事件触发函数的额外参数。
      vm.$once( event, callback )|监听一个自定义事件，但是只触发一次，在第一次触发之后移除监听器。
      vm.$off( [event, callback] )|移除自定义事件监听器。如果没有提供参数，则移除所有的事件监听器；如果只提供了事件，则移除该事件所有的监听器；如果同时提供了事件与回调，则只移除这个回调的监听器。
      vm.$emit( eventName, […args] )( target, key )|触发当前实例上的事件。附加参数都会传给监听器回调。
      vm.$mount( [elementOrSelector] )|如果 Vue 实例在实例化时没有收到 el 选项，则它处于“未挂载”状态，没有关联的 DOM 元素。可以使用 vm.$mount() 手动地挂载一个未挂载的实例。
      vm.$forceUpdate()|迫使 Vue 实例重新渲染。注意它仅仅影响实例本身和插入插槽内容的子组件，而不是所有子组件。
      vm.$nextTick( [callback] )|将回调延迟到下次 DOM 更新循环之后执行。在修改数据之后立即使用它，然后等待 DOM 更新。它跟全局方法 Vue.nextTick 一样，不同的是回调的 this 自动绑定到调用它的实例上。
      vm.$destroy()|完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器。  触发 beforeDestroy 和 destroyed 的钩子。

  - vue常用的指令

      指令|描述|补充
      --|:--:|:--:
      v-text|更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。
      v-html|更新元素的 innerHTML 。注意：内容按普通 HTML 插入 - 不会作为 Vue 模板进行编译 。如果试图使用 v-html 组合模板，可以重新考虑是否通过使用组件来替代。
      v-show|根据表达式之真假值，切换元素的 display CSS 属性。当条件变化时该指令触发过渡效果。
      v-if|根据表达式的值的真假条件渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是template ，将提出它的内容作为条件块。当条件变化时该指令触发过渡效果。
      v-for|基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 alias in expression ，为当前遍历的元素提供别名：|预期：array ， Object ， number ， string ， Iterable (2.6 新增)
      v-on|更新元素的 textContent。如果要更新部分的 textContent ，需要使用 {{ Mustache }} 插值。
      v-model|在表单控件或者组件上创建双向绑定。
      v-slot|提供具名插槽或需要接收 prop 的插槽。
      v-bind|动态地绑定一个或多个特性，或一个组件 prop 到表达式。|缩写：:


      ### tips
      - v-for当和 v-if 一起使用时，v-for 的优先级比 v-if 更高

<h3 class="myH3">(更新于 2019-5-11)</h3>
<h5><a href="./Log">更新日志</a></h5>

![image](https://qianyinghuanmie.github.io/vue2.0-demos/dist/static/help1.gif)

<h3 class="myH3">Construction</h3>
<p>使用vue-cli开始构建, ，<a href="https://github.com/vuejs/vue-cli">关于 vue-cli</a></p>
<p>使用 vue-router 路由，<a href="https://github.com/vuejs/vue-cli">关于 vue-router</a></p>
<!-- <p>Use vuex processing business <a href="https://github.com/vuejs/vuex">about vuex</a></p> -->
<p>使用 vue-resource<a href="https://github.com/pagekit/vue-resource">关于 vue-resource</a></p>
<p>使用 sass <a href="https://github.com/sass/sass">关于 sass</a></p>
<p>基于 element-ui ，<a href="http://element.eleme.io/#/zh-CN/component/quickstart">关于 element-ui</a></p>
<p>基于 on mint-ui，<a href="https://github.com/ElemeFE/mint-ui">关于 mint-ui</a></p>
<p>使用 vue-touch（this gesture plug-in is another vue-touch branch and support vue2.0），<a href="https://github.com/vuejs/vue-touch/tree/next">关于 vue-touch</a></p>
<p>使用 阿里字体 ，<a href="http://www.iconfont.cn/home/index">关于 Ali font</a></p>
<h3 class="myH3">demos 列表</h3>
<p>1、城市排序和检索</p>
<p>2、高德地图的使用</p>
<p>3、v-charts的使用</p>
<p>4、使用 vue-picture-input 预览图片</p>
<p>5、使用 element-ui 的图片上组件</p>
<p>6、mintUi好用的组件集合 </p>
<p>7、vue-touch的使用</p>
<p>9、时间选择组件</p>
<h3 class="myH3">教程</h3>
<p>1、城市选择</p>
<p>2、高德地图的调用</p>
<p>3、高德地图的周边使用</p>

可以参考[my blog](http://www.cnblogs.com/star-wind/)

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
