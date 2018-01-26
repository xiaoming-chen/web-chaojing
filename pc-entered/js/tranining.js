//普通说明
$(function(){
	var a0 = [
		'双证书，含金量高。超竞教育和腾讯电竞共同认证的结业证书，行业权威机构认可，提高就业竞争力',
		'大咖签约，阵容强大。超竞教育签约阿布、若风、Remember、Gogoing等行业大咖为名誉客座教授',
		'专业订制教材，超竞名师专业授课，大咖与腾讯专家亲临指导，实战教学，为行业培养精英人才',
		'专业的职业规划顾问，就业推荐，入职名企。腾讯、EDG、超竞教育等众多机构在班里选拔人才，优秀学员被优先推荐，直接录用',
		'超竞黄埔，学无止境。加入超竞大家庭，成为超竞黄埔军校校友并可加入超竞教育校友社区平台，众多大咖在社区平台分享交流，与更多志同道合的同学和师兄师姐共同进步',
		'超竞优秀学员，有机会加入超竞战队，由超竞导师带队，参加全国大型电竞赛事，和全国电竞精英同台竞技；超竞学员可以优先参与超竞定期举办的大咖沙龙和电竞赛事',
	]
	var a1 = [
		'双证书，含金量高。超竞教育和腾讯电竞共同认证的结业证书，行业权威机构认可，提高就业竞争力',
		'大咖签约，阵容强大。超竞教育签约阿布、若风、Remember、Gogoing等行业大咖为名誉客座教授',
		'专业订制教材，超竞名师专业授课，大咖与腾讯专家亲临指导，实战教学，为行业培养精英人',
		'专业的职业规划顾问，就业推荐，入职名企。腾讯、EDG、超竞教育等众多机构在班里选拔人才，优秀学员被优先推荐，直接录用',
		'超竞黄埔，学无止境。加入超竞大家庭，成为超竞黄埔军校校友并可加入超竞教育校友社区平台，众多大咖在社区平台分享交流，与更多志同道合的同学和师兄师姐共同进步',
		'超竞优秀学员，有机会加入超竞战队，由超竞导师带队，参加全国大型电竞赛事，和全国电竞精英同台竞技；超竞学员可以优先参与超竞定期举办的大咖沙龙和电竞赛事',
	]
	var a2 = [
		'EDG唯一官方指定的选手选拔平台',
		'军事化管理（统一就寝、统一训练、统一着装、统一管理等）',
		'超竞教育与EDG俱乐部联合认证并出具就业推荐信',
		'暑期5周封闭集训，100%EDG训练模式，总教练阿布领衔指导，专业教练全程陪同',
		'优秀学员奖励到上海EDG俱乐部集训1周，通过考核者可加盟EDG',
		'众多俱乐部在班里选拔人才，优秀者可获得推荐到相关俱乐部的机会',
	]

	var jh0=[
		{
			title:'电竞俱乐部运营管理人才培养计划',
			place:'中山大学南方学院',
			classEx:[
				{name:'专业班',time:'4月中旬',cycle:'12周',money:'19800元'},
				{name:'提高班',time:'5月中旬',cycle:'8周',money:'15800元'},
				{name:'暑期班',time:'7月中旬',cycle:'6周',money:'13800元'},
			]
		},
		{
			title:'电竞赛事运营管理人才培养计划',
			place:'中山大学南方学院',
			classEx:[
				{name:'专业班',time:'4月中旬',cycle:'12周',money:'19800元'},
				{name:'提高班',time:'5月中旬',cycle:'8周',money:'15800元'},
				{name:'暑期班',time:'7月中旬',cycle:'6周',money:'13800元'},
			]
		},
		{
			title:'电竞俱乐部教练培养计划',
			place:'中山大学南方学院',
			classEx:[
				{name:'专业班',time:'4月中旬',cycle:'12周',money:'19800元'},
				{name:'提高班',time:'5月中旬',cycle:'8周',money:'15800元'},
				{name:'暑期班',time:'7月中旬',cycle:'6周',money:'13800元'},
			]
		},
		{
			title:'电竞游戏运营人才培养计划',
			place:'中山大学南方学院',
			classEx:[
				{name:'专业班',time:'4月中旬',cycle:'12周',money:'19800元'},
				{name:'提高班',time:'5月中旬',cycle:'8周',money:'15800元'},
				{name:'暑期班',time:'7月中旬',cycle:'6周',money:'13800元'},
			]
		},
		{
			title:'电竞商务管理人才培养计划',
			place:'中山大学南方学院',
			classEx:[
				{name:'专业班',time:'4月中旬',cycle:'12周',money:'19800元'},
				{name:'提高班',time:'5月中旬',cycle:'8周',money:'15800元'},
				{name:'暑期班',time:'7月中旬',cycle:'6周',money:'13800元'},
			]
		}
	]

	var jh1=[
		{
			title:'电竞市场营销提升班',
			place:'中山大学南方学院',
			classEx:[
				{name:'周末班',time:'4月中-7月中',cycle:'逢周末上课',money:'9800元'},
			]
		},
		{
			title:'电竞赛事策划运营提升班',
			place:'中山大学南方学院',
			classEx:[
				{name:'周末班',time:'4月中-7月中',cycle:'逢周末上课',money:'9800元'},
			]
		},
		{
			title:'电竞商务管理提升班',
			place:'中山大学南方学院',
			classEx:[
				{name:'周末班',time:'4月中-7月中',cycle:'逢周末上课',money:'9800元'},
			]
		}
	]

	var jh2=[
		{
			title:'EDG俱乐部选手选拔营',
			place:'中山大学南方学院',
			classEx:[
				{name:'选手选拔营',time:'7月中-8月末',cycle:'5周+1周（优秀者免费到EDG基地集训）',money:'26800元'},
			]
		}
	]

	console.log('data')
	var vw = new Vue({
		el:"#tradin",
		data:{
			paramobj:'',
			num:0,
			characteristic:[],
			shiftClass:[],
			items:[
				{k:0,url:'./images/Mask_1.png',type:'0'},
				{k:0,url:'./images/Mask_2.png',type:'1'},
				{k:0,url:'./images/Mask_3.png',type:'2'},
			],
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
	        	if(n==0){_this.characteristic = a0;_this.shiftClass = jh0}
	        	if(n==1){_this.characteristic = a1;_this.shiftClass = jh1}
	        	if(n==2){_this.characteristic = a2;_this.shiftClass = jh2}
	        }
	        console.log(paramobj)
		},
	})
})

