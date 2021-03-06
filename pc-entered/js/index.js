$(function(){
	console.log('data')
	var vw = new Vue({
		el:"#enteredPc",
		data:{
			items:[
				{k:0,url:'./images/Mask_1.png',type:'0'},
				{k:0,url:'./images/Mask_2.png',type:'1'},
				{k:0,url:'./images/Mask_3.png',type:'2'},
				{k:1,url:'./images/Mask_4.png',type:'1'},
			],
			swiperImgs:[
				{link:'#',url:'./images/1.jpg'},
				{link:'#',url:'./images/2.jpg'},
				{link:'#',url:'./images/banner.png'},
			]
		},

		//监听
 		watch: {},

		//函数
		methods: {
			//初始化数据
			getPageData:function(n){

			}
		},

		//实例化完成
        created: function() {
        	this.getPageData(0)
        },

		//页面加载完成后
		mounted: function() {
			var swiper = new Swiper('.swiper-container', {
				spaceBetween: 0,
				loop: true,
				pagination: {
					el: '.swiper-pagination',
				},
				autoplay: {
					delay: 2500,
					disableOnInteraction: false,
				},
			});
		},
	})
})

