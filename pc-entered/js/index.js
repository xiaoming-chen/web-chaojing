$(function(){
	var vw = new Vue({
		el:"enteredPc",
		data:{
			item:[],
		}

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
		mounted: function() {},


	})
})