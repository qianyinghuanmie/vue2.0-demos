# lCalendar扩展 
[LCalendar原文地址](https://github.com/xfhxbb/LCalendar)
找到我：[github ](https://github.com/chenyk2016)  [博客园 ](http://www.cnblogs.com/chenykblog/)

<br/>

---
## 扩展介绍
1.自动确认模式：加载后直接显示时间选择框，选择时间后自动改变数值。
2.新增钩子函数：时间改变后触发。
3.新增实例方法：实例的销毁方法。

<br/>

----
## 使用扩展
#### 配置项
1. `auto`     ：**【新增】**为true是不用点击自动选择时间，使用扩展必须为true
2. `wrapper`  ：**【新增】**容器，时间选择器插入的地方。
3. `trigger`  ：【原有】时间显示的元素，需要传入一个Dom元素
4. `type`     ：【原有】与原设定一样，时间的类型 

- 注：date 调出日期选择, datetime 调出日期时间选择, time 调出时间选择, ym 调出年月选择

5. `minDate`  ：【原有】最小日期 注意：该值会覆盖标签内定义的日期范围
6. `maxDate`  ：【原有】最大日期 注意：该值会覆盖标签内定义的日期范围
7. `onChange` : **【新增】**时间选择完成触发的钩子函数，参数为选择的时间

- 注：此处也可以用实例来声明函数。


#### 钩子函数
###### 1. `onChange`

- 介绍： *选择日期完成后触发函数*
- 参数类型： `string `：选择的日期
- 返回值： `undefined`

```node
calendar.onChange = function(value){}
```


#### 实例方法
###### 1. destory

- 介绍： *销毁实例*
- 参数类型： `null `
- 返回值： `undefined`

```node
calendar.destory()
```



<br/>

--------------------
## 实例演示：

```node
var calendar = new LCalendar();
calendar.init({
    'wrapper': document.querySelector(".dateSelWrap"), //盒子元素
    'trigger': document.querySelector(".selectedDate"), //标签元素
    'type': 'ym', //date 调出日期选择, datetime 调出日期时间选择, time 调出时间选择, ym 调出年月选择
    'minDate': "2000-01", //最小日期 注意：该值会覆盖标签内定义的日期范围
    'maxDate': "2020-01",  //最大日期 注意：该值会覆盖标签内定义的日期范围
    'auto': true,         // 不用点击自动选择时间
    'onChange': function (value) {
        console.log(value);
    }
});
// 钩子函数
calendar.onChange = function(value){ console.log(value); }
```