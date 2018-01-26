//游学说明
$(function(){
	var jh=[
		{
			imgUrl:'images/shanghai.jpg',
			title:'未来电竞俱乐部精英EDG全能训练营（上海）',
			objtime:'4月中旬开始',
			gotime:'一个月两班（暑期期间视报名情况可增设班别）',
			city:'上海地接',
			timelength:'5天',
			money:'4800元（不住宿减1000）',
			characteristic:[
				'参观并深入了解EDG俱乐部，观看队员训练，与大咖亲密接触',
				'与EDG战队队员分享交流，结交志同道合的朋友，为你的成长获得更多收益',
				'根据赛事情况，可安排现场观赛（费用自理）',
				'与队友们一起感受魔都风采',
				'免费获得专业个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力',
				'免费获得大咖心路历程分享'
			]
		},
		{
			imgUrl:'images/taiwan.jpg',
			title:'台湾电子竞技全能学习营（台湾）',
			objtime:'4月中旬开始',
			gotime:'正常一个月一班，暑期一个月两班',
			city:'广州',
			timelength:'7天',
			money:'12800元（不含签证费用）',
			characteristic:[
				'由行业专家带队指导，参观学习台湾电竞俱乐部的运营与管理，观看队员训练',
				'参观台湾电子竞技俱乐部，感受台湾电竞氛围，与电竞俱乐部大咖面对面交流',
				'游览台湾，领略宝岛风光、美食、夜市、人文风情',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力',
				'免费获得大咖心路历程分享',
				'结交志同道合的朋友，为你的成长获得更多收益',
			]
		},
		{
			imgUrl:'images/faguo.jpg',
			title:'法国里昂FIFA俱乐部全景学习营（法国里昂）',
			objtime:'5月中旬开始',
			gotime:'正常一个月一班，暑期一个月两班',
			city:'广州',
			timelength:'15天',
			money:'68000元（不含签证费用）',
			characteristic:[
				'由行业专家亲自带队指导，全程学习电竞知识',
				'EDG俱乐部官方战略合作伙伴，参观并深入了解里昂FIFA俱乐部',
				'首家进军中国职业电竞的海外足球俱乐部，体验FIFA俱乐部风采',
				'FIFA俱乐部大咖心路历程分享，与大咖亲密接触并合影',
				'感受法国城市的静谧，游览法国名胜古迹，体验法国美食文化',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
		{
			imgUrl:'images/kpashenz.jpg',
			title:'KPL春季季后赛观赛及赛事能力提升营(深圳)',
			objtime:'6月',
			gotime:'视比赛时间而定',
			city:'深圳地接',
			timelength:'3天',
			money:'2800元（不住宿减500）',
			characteristic:[
				'组队观看KPL春季季后赛，专家全程分析赛事并可学习全方位的电竞知识',
				'真实案例模拟分析，专业人士做出赛后分析分享会，不断提升自我',
				'参观腾讯电竞办公大楼，行业大咖交流分享会',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
		{
			imgUrl:'images/kpazshenz.jpg',
			title:'KPL春季总决赛观赛及赛事能力提升营(深圳)',
			objtime:'7月',
			gotime:'视比赛时间而定',
			city:'深圳地接',
			timelength:'3天',
			money:'3800元（不住宿减500）',
			characteristic:[
				'组队观看KPL春季总决赛，专家全程分析赛事并可学习全方位的电竞知识',
				'真实案例模拟分析，专业人士做出赛后分析分享会，不断提升自我',
				'参观腾讯电竞办公大楼，行业大咖分享经验',
				'免费获得个人规划指导, 包括专业、实习和游学证',
				'免费获得超竞教育推荐信, 提高就业竞争力',
			]
		},
		{
			imgUrl:'images/luoshanj.jpg',
			title:'E3电子娱乐展览全能学习营（美国洛杉矶）',
			objtime:'6月',
			gotime:'视展览时间而定',
			city:'广州',
			timelength:'12天',
			money:'48000元（不含签证费用）',
			characteristic:[
				'由行业专家亲自带队，接触到世界上最新，最专业的电子娱乐信息',
				'亲临全球规模最大、知名度最高的互动娱乐展示会现场，感受电子娱乐界一年一度的奥林匹克盛会文化',
				'与全球最具影响力的游戏零售商、分销部、研发商与投资商、媒体亲密接触',
				'参观拳头公司，体验公司独具一别的公司文化，并有神秘大咖分享经验',
				'感受美国资本主义世界文化，领略自然风光',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
		{
			imgUrl:'images/kelong.jpg',
			title:'德国科隆国际游戏展览全能学习营（德国科隆）',
			objtime:'8月',
			gotime:'视展览时间而定',
			city:'广州',
			timelength:'12天',
			money:'48000元（不含签证费用）',
			characteristic:[
				'行业专家亲自带队，全程学习电竞知识',
				'亲临体验科隆国际游戏展，与全球头号业务的参展商交流，感受未来电竞精彩生活及整个游戏场景',
				'了解德国历史文化，感受城市魅力',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
		{
			imgUrl:'images/s8.jpg',
			title:'英雄联盟S8总决赛全景学习营（地点待定）',
			objtime:'比赛期间',
			gotime:'视展览时间而定',
			city:'广州',
			timelength:'3天',
			money:'视地点定（含门票）',
			characteristic:[
				'行业专家亲自带队，专家全程分析赛事并可学习全方位的电竞知识',
				'真实案例模拟，电子竞技大咖赛后分析分享会',
				'感受比赛国家的当地风光，了解当地文化',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
		{
			imgUrl:'images/starhanhuo.jpg',
			title:'G-STAR韩国游戏博览全能学习营（韩国）',
			objtime:'11月',
			gotime:'视展览时间而定',
			city:'广州',
			timelength:'5天',
			money:'12800元（不含签证费用）',
			characteristic:[
				'行业专家亲自带队，参观韩国电竞俱乐部，感受韩国一流俱乐部的电竞氛围',
				'感受参与型的游戏文化，学习国际性的游戏商务，体验多种题材的游戏与附带设施',
				'参与国际游戏研讨会与游戏企业就业博览会，拓展知识，提高自我',
				'免费获得个人规划指导, 包括专业、实习和游学证书',
				'免费获得超竞教育推荐信, 提高就业竞争力'
			]
		},
	]
	console.log('data')
	var vw = new Vue({
		el:"#study",
		data:{
			paramobj:'',
			num:0,
			study:[],
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
	        	_this.num = n;
	        	_this.study = jh
	        }
	        console.log(paramobj)
		},
	})
})

