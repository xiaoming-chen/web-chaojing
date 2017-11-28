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

#### 获取远程服务器的地址
```javascript
Common.GetRemoteAddr()
```

#### 获取监管远程服务器的地址
```javascript
Common.GetPlatformAddr()
```

#### 安装百度统计代码
```javascript
Common.InstallBaiduStatistics();
```

#### 跳转到App
```javascript
Common.OpenAPP(jumpAppCallback, shareGuide)
```
`jumpAppCallback` 类型为 function 表示要跳转到的APP的地址，默认是`ssosep://`
`shareGuide` 类型为 function 表示页面自定义的引导图，可以不传这个值，那么就会用户默认的引导图
	
	如：
	jumpAppCallback = function() {
	     location = 'ssosep://';
	}

	shareGuide = function() {
		var div = document.createElement('div');
		div.setAttribute('style', 'position: fixed;top: 0;left: 0;bottom:0;z-index: 9999999;width: 100%;height: 100%;background-color: #000;opacity: 0.8;');
		div.innerHTML = '<img src="https://cdn1.bb-app.cn/share/share_guide.png" style="width: 50%;position: fixed;right: 25px;">'
		document.getElementsByTagName('body')[0].appendChild(div);
		document.body.addEventListener('touchmove', function(e) {
			e.preventDefault();
		});
	}
	
#### 弹出提示框
```javascript
Common.Tips(msg)
```
目前只是alert出来

#### 获取短的数字显示方式
```javascript
Common.GetShortNumber(number)
```
大于等于1亿的显示`x.x亿`，大于等于1万的显示`x.x万`,小于10000的直接显示原始值，

#### 设置HTML页面的`<html>`标签的`font-size`的值
```javascript
Common.SetDocumentRem(designWidth, designPixel)
```
* **designWidth** 是UI给的设计页面的宽度，一般为750px
* **designPixel** 是UI设计页面时所使用的像素值，一般将这个值X10，在设计页面上获取某元素的rem值时再除以10就要以得到真实的值，如下图：

![设计分辨率](px.png)
    
#### 设置QQ分享和微信分享的代码
```javascript
Common.SetShareInfo(ops)
```
`ops`的值：

| 参数            | 类型    | 默认值       										 | 说明                     |
|-----------------|--------|-------------------------------------------------------|-------------------------|
| title           | string | 分享标题     										    | 分享卡片上的标题         |
| desc            | string | 分享描述     										    | 分享卡片上的描述          |
| img_url         | string | ''        										       | 分享卡片的图标            |
| default_img_url | string | 'https://cdn1.bb-app.cn/share/icon_bb.png'            | 在没有图标时显示的默认图标 |
| url             | string | location.href 										   | 点击卡片时跳转的链接      |
| openDebug       | bool   | false       									       | 是否开启调用模式          |

#### 查看大图
```javascript
//@images 多张图片的URL的数组
var res = Common.InitpreviewImages(images)
//其中res的值
//{
//	showImage: function(index){},
//	pushImage: function(imgurl){}
//}
//在点击查看图片的时候就可以直接调用
res.showImage(index); //@index 为这张图片在images数组中的索引
//如果中途有新增的图片可以这样调用来插入新的图片
res.pushImage(imgurl); //@imgurl 为新的图片的URL
```
目前只支持微信和QQ，其他不可以查看

该函数会返回一个 function , 这样可以分成多批来查看图片（如：正文或评论）

#### 设置图片懒加载
```javascript
Common.ImageLazyLoading(ops)
```
首先HTML文件中需要懒加载的图片应该这样设置`<img src="img/blank.gif" alt="Photo" data-echo="img/photo.jpg">` 其中的`img/blank.gif` 可以是一张很小的加载中的图片，在真正的图片还没有出来的时候显示用的，`data-echo` 是真正的图片的URL
`ops`的值：

| 参数     | 类型      | 默认值       | 说明                                                     |
|----------|----------|--------------|---------------------------------------------------------|
| offset   | number   | 0            | 离可视区域多少像素的图片可以被加载                         |
| throttle | number   | 250          | 图片延迟多少毫秒加载                                      |
| debounce | bool     | true         | 防抖动                                                   |
| unload   | bool     | false        | 告诉echo是加载还是卸载视图中的图片，当图片离开视图区域时触发 |
| callback | function | function(){} | 回调函数，用来检测图片是否加载                             |
