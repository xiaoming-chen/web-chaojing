var windowW = $(window).width();
var windowH = $(window).height();

//if(windowH>1240){
//    $('#swiperFour #on').css('padding-top','15%');
//    $('#imgMove img').css({'width':'auto'})
//}
//if(windowH<=1240&&windowH>780){
//    $('#swiperFour #on').css('padding-top','10%');
//    $('#imgMove img').css('width','80%')
//}
//
//if(windowH<=780){
//    $('#swiperFour #on').css('padding-top','5%');
//    $('#imgMove img').css('width','60%');
//}
var explorer = navigator.userAgent ;
if (explorer.indexOf("MSIE") >= 0) {
    if(navigator.userAgent.indexOf("MSIE 6.0")>0){
        alert("您使用的浏览器内核版本为IE6，本页面最低支持IE10以上，请升级浏览器或更换其他浏览器,以免影响体验！");
    }
    if(navigator.userAgent.indexOf("MSIE 7.0")>0){
        alert("您使用的浏览器内核版本为IE7，本页面最低支持IE10以上，请升级浏览器或更换其他浏览器,以免影响体验！");
    }
    if(navigator.userAgent.indexOf("MSIE 9.0")>0 && !window.innerWidth){//这里是重点，你懂的
        alert("您使用的浏览器内核版本为IE8，本页面最低支持IE10以上，请升级浏览器或更换其他浏览器,以免影响体验！");
    }
    if(navigator.userAgent.indexOf("MSIE 9.0")>0){
        alert("您使用的浏览器内核版本为IE9，本页面最低支持IE10以上，请升级浏览器或更换其他浏览器,以免影响体验！");
    }
}



//$(function(){
var default_domain = 'http://192.168.7.245:9028';
if (window.location.host === 'www.supergen.com.cn'||window.location.host === 'supergen.com.cn'){
    default_domain = 'http://39.108.114.71:9208';
}

var vm = new Vue({
        el:'#edg',
        data:{
            windowW:0,  //浏览器宽
            windowH:0,  //浏览器高
            URL:default_domain,
            headTo:1,
            footTo:1,
            newsDetail:'', //新闻详情
            Advertisement:'',//广告
            newsDetailIE:'',
            page:1,        //当前页数
            per_page:10,   //一页多少条
            pageNum:1,     //页数
            currentPage:1, //当前页
            total:0,
            journalismArr:[],  //新闻
            advertisement:[],  //广告
            imgArr:[1,2,3,4,5]
        },
        //监听
        watch: {
            newsDetailIE:function(val){
                this.newsDetail='';
                var id = val.substring(1);
                var url = this.URL + '/v1/cms/news/single?id='+id;
                var _this = this;
                $.ajax({
                    url: url,
                    type: 'GET',
                    "Content-Type":"application/json",
                    datatype:"json",
                    success: function(data) {
                        console.log(data.Content);
                        _this.newsDetail = data.Content;
                    },
                    error:function(msg){
                        console.log("Ajax获取数据失败！");
                        console.dir(msg.statusText);
                    }
                });
            },
            windowW:function(w){
                this.carouselIMG()
            },
            windowH:function(h){
                this.carouselIMG()
            }
        },

        //计算属性
        computed: {},

        //事件处理
        methods: {
            bool:function(t,y,u){
                if(t.length>1&&y.length>=3&&u.URL!=''){
                    return 'true'
                }else{
                    return 'false'
                }
            },

            imgUrl:function(url){
                return 'url('+url+') no-repeat center center rgb(32, 30, 31)';
            },

            imgSize:function(url){
                return '100% 100%';
            },

            //测试函数
            consolog:function(n){
                console.log(n)
            },

            //取出
            fetch:function() {
                if (explorer.indexOf("MSIE") >= 0) {
                    if(location.hash&&location.hash!=''){
                        this.newsDetailIE=location.hash;
                    }
                }else{
                    return JSON.parse(window.localStorage.getItem('newsDetail') || '[]');
                }
            },

            //存入
            save:function(items) {
                if (explorer.indexOf("MSIE") >= 0) {
                    location.hash='#'+items.ID;

                }else{
                    window.localStorage.setItem('newsDetail', JSON.stringify(items.Content))
                }
            },

            //时间戳转换成日期
            dateStringAr: function(nS) {
                return new Date(parseInt(nS) *1000).toLocaleString().replace(/:\d{1,2}$/, ' ');
            },

            //关于我们
            aboutUs:function(){
                console.log('关于我们！')
            },

            //广告
            advertisementFn:function(n){
                var _this = this;
                var url = this.URL;
                $.ajax({
                    url: url+'/v1/cms/ads',
                    success: function(data) {
                        var arr=[],advertisement={},bo=0;
                        for(var i=0;i<data.ADs.length;i++){
                            if(data.ADs[i].Type!=1&&bo<5){
                                arr.push(data.ADs[i]);
                                bo++;
                            }
                            if(data.ADs[i].Type==1){
                                advertisement = data.ADs[i];
                                console.log(advertisement)
                            }
                        }
                        _this.imgArr=arr;
                        console.log(_this.imgArr)
                        _this.Advertisement = advertisement;
                        console.log(_this.Advertisement)
                    },
                    error:function(msg){
                        console.log("Ajax获取数据失败！");
                        console.dir(msg.statusText);
                    }
                });
            },

            //第二页轮播照片
            carouselIMG:function(){
                var w=$('#accordion').width(),h=$('body').height();
                jQuery(document).ready(function($){
                    $('.accordion').gridAccordion({
                        width:w,
                        height:h,
                        columns:4,
                        distance:4,
                        closedPanelWidth:10,
                        closedPanelHeight:10,
                        alignType:'centerCenter',
                        slideshow:true,
                        panelProperties:{
                            0:{captionWidth:200, captionHeight:35, captionTop:30, captionLeft:30},
                            4:{captionWidth:150, captionHeight:100, captionTop:30, captionLeft:650},
                            7:{captionWidth:310, captionHeight:35, captionTop:350, captionLeft:40},
                            8:{captionWidth:300, captionHeight:40, captionTop:150, captionLeft:35},
                            11:{captionWidth:150, captionHeight:120, captionTop:300, captionLeft:30},
                            14:{captionWidth:300, captionHeight:40, captionTop:30, captionLeft:50},
                            16:{captionWidth:150, captionHeight:120, captionTop:150, captionLeft:10},
                            18:{captionWidth:300, captionHeight:40, captionTop:130, captionLeft:50}
                        }
                    })
                })
            },


            //新闻
            journalismFn:function(n){
                var url = this.URL + '/v1/cms/news';
                var _this = this;
                if(n==1){this.page=this.currentPage}
                var obj={
                    page:this.page,
                    per_page:this.per_page
                };
                $.ajax({
                    url: url,
                    type: 'GET',
                    //"Content-Type":"application/json",
                    datatype:"json",
                    data: obj,
                    success: function(data) {
                        _this.journalismArr = data.News;
                        _this.total = data.Total;
                        _this.pageNum = Math.ceil(data.Total/_this.per_page);
                    }
                });
            }
        },

        //实例加载完成后
        created:function(){
            this.journalismFn(0);
            this.windowH = $(window).height();
            if (explorer.indexOf("MSIE") >= 0) {
                this.fetch()
            }else{
                this.newsDetail = this.fetch();
            }
        },

        mounted:function(){
            this.advertisementFn(0);
        }
    });
//})

$(window).resize(function(){
    var w = $(window).width();
    var h = $(window).height();
    vm.$data.windowW = w;
});