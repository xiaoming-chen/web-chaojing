# 移动端HTML5页面公共接口
***

> 在html文件的`<head>`标签里加上`<meta name="apple-itunes-app" content="app-id=1142491576">`在苹果浏览器上可以直接打开APP（待测试）

#### 安装
```html
<script src="https://cdn1.bb-app.cn/share/common.min.js"></script>
```
  
#### 向服务器请求数据的接口
```javascript
Common.Request(url, ops)
```
`ops`的值：

| 参数        | 类型      | 默认值                          | 说明                                 |
|-------------|----------|---------------------------------|--------------------------------------|
| action      | string   | get                             | HTTP请求类型                         |
| params      | object   | null                            | 请求的参数列表, 如：{k1=v1,k2=v2,...} |
| domain      | string   | 默认调用`Common.GetRemoteAddr()` |  请求的目标服务器地址                 |
| isAsync     | bool     | true                            | 是否异步请求                          |
| contentType | string   | application/json                | 请求的内容类型                        |
| showError   | bool     | true                            | 出错时是否自动弹出窗口，flase会调用回调 |
| success     | function | function(){}                    | 请求成功调用的函数                    |
| error       | function | function(){}                    | 请求失败调用的函数                    |
