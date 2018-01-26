$(function(){
	console.log('data')
	var major = [
		'超竞教育电竞专业集训班',
		'超竞教育电竞职业周末班',
		'超竞教育电竞人才暑期选拔营',
		'超竞教育电竞游（留）学培训中心',
	]
	
	var shift = {
		0:['专业班', '提高班', '暑期班'],
		1:['周末班'],
		2:['选手选拔营'],
	}

	var curriculum = {
		0:[
			'电竞俱乐部运营管理人才培养计划',
			'电竞赛事运营管理人才培养计划',
			'电竞俱乐部教练培养计划',
			'电竞游戏运营人才培养计划',
			'电竞商务管理人才培养计划',
		],
		1:[
			'电竞市场营销提升班',
			'电竞赛事策划运营提升班',
			'电竞商务管理提升班'
		],
		2:[
			'EDG俱乐部选手选拔营'
		],
		3:[
			'未来电竞俱乐部精英EDG全能训练营（上海）',
			'台湾电子竞技全能学习营（台湾）',
			'法国里昂FIFA俱乐部全景学习营（法国里昂）', 
			'KPL春季季后赛观赛及赛事能力提升营(深圳)', 
			'KPL春季总决赛观赛及赛事能力提升营(深圳)', 
			'E3电子娱乐展览全能学习营（美国洛杉矶）', 
			'德国科隆国际游戏展览全能学习营（德国科隆）', 
			'英雄联盟S8总决赛全景学习营（地点待定）',
			'G-STAR韩国游戏博览全能学习营（韩国）'
		],
	}


	var vw = new Vue({
		el:"#signup",
		data:{
			num:0,
			paramobj:'',
			stak:true,
			major:major,
			curriculum:curriculum,
			shift:shift,

			majorNum:0,
			curriculumNum:0,
			shiftNum:0,
		},

		//监听
 		watch: {
 			paramobj:function(obj){
 				if(obj.op==1){
 					num = 3;
 				}else{
 					num = obj.type;
 				}
 			}
 		},

		//函数
		methods: {
			//单选判断
			stakFun:function(n){
				if(n==0){
					return 'stak male'
				}else{
					return 'stak female'
				}
			},

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
			var _this = this;
			var url_app = window.location.search.substring(1); //"?fileid=%s&communityid=%s&postid=%s&by=%s"
	        var param_list = url_app.split("&");
	        var paramobj = {}; //url信息详细内容
	        var tilex = '',imgUrl='',desc = '';
	        for(var k in param_list){
	            var info = param_list[k].split("=");
	            paramobj[info[0]] = info[1];
	        }
	        _this.paramobj = paramobj
	        if(paramobj.type){
	        	var n = +_this.paramobj.type;
	        }
		},

	})
})

