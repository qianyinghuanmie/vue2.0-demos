# demo
> 例子
将页面公共头部提取为组件(更新于2017-5-5)

>新增城市列表demo(更新于2017-5-26)  <br>
主要涉及(前期准备)：   <br>
1.引入汉字转拼音的插件，利用NPM安装 代码指令为  npm install pinyin --save ，详细步骤请到[pinyin](https://github.com/hotoo/pinyin) <br>
2.引入vue-resource，调用json文件，可以参考目录中的city.json,有条件的也可以自己去扒 <br>

>新增高德地图demo(更新于2017-6-15)  <br>
主要涉及(前期准备)：<br>
1.引入高德地图api
注意：为方便演示效果，此项目中使用了个人开发者的高德秘钥，请自行去替换成自己的。

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
