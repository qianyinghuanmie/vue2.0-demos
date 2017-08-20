
<h2>说明</h2>
<h3 class="myH3">项目改版(更新于2017-8-20)</h3>
<h3 class="myH3">项目构建</h3>
<p>使用vue-cli起步 ，<a href="https://github.com/vuejs/vue-cli">关于vue-cli</a></p>
<p>使用vue-router路由，<a href="https://github.com/vuejs/vue-cli">关于vue-router</a></p>
<p>使用vuex处理业务 <a href="https://github.com/vuejs/vuex">关于vuex</a></p>
<p>使用vue- resource <a href="https://github.com/pagekit/vue-resource">关于vue- resource</a></p>
<p>使用sass</p>
<p>基于mint-ui，<a href="https://github.com/ElemeFE/mint-ui">关于</a></p>
<h3 class="myH3">当前涉及的demo</h3>
<p>1、选择城市，字母排序</p>
<p>2、调用地图</p>
<p>3、使用v-charts图表</p>
<h3 class="myH3">关于本项目</h3>
<p>npm install报错是pinyin引起的(但不影响正常使用)，只想使用其他demo的，可以不安装pinyin</p>
<h3 class="myH3">改版之前</h3>
<h4>将页面公共头部提取为组件(更新于2017-5-5)</h4>
<p>主要涉及(前期准备)：</p>
<p>
  1.引入汉字转拼音的插件，利用NPM安装 代码指令为  npm install pinyin --save ，详细步骤请到 <a href="https://github.com/hotoo/pinyin">pinyin</a><br>
  2.引入vue-resource，调用json文件，可以参考目录中的city.json,有条件的也可以自己去扒</p>
<h4>新增高德地图demo(更新于2017-6-15)</h4>
<p>主要涉及(前期准备)</p>
<p>1.引入高德地图api
  注意：为方便演示效果，此项目中使用了个人开发者的高德秘钥，请自行去替换成自己的。</p>
<h4>新增 <a href="https://github.com/ElemeFE/v-charts">vcharts</a>(更新于2017-8-8)  </h4>

按照如下命令运行即可，具体步骤请参考[我的博客](http://www.cnblogs.com/star-wind/)

## Build Setup

``` bash
# install dependencies 安装依赖
npm install

# serve with hot reload at localhost:8080  运行程序
npm run dev

# build for production with minification    打包
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
