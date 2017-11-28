<style scoped>
	#new-add {padding: 20px;}
	div.table{margin-top: 60px;box-sizing: border-box;padding:0 20px 20px}
	span.btn{color: #0e90d2;margin:0 10px;cursor: pointer}
	span.btn:hover{color: #075f8d}
	table{width: 100%;padding: 0;margin: 0;border-collapse: collapse;}
	table td,table th{text-align: center;border: 1px solid #898989;font-size: 16px;height: 34px;line-height: 34x}
	table td{height: 30px;line-height: 30x}
	table td:nth-chlid(2n){background: rgba(204,204,204,.5);}
	table th{background: #ccc;border-bottom: none;font-weight: 100;font-size: 18px;}
	span.ech{float: right}
	#remarkBox{position: absolute;left: 0;top: 0;right: 0;bottom: 0;background: rgba(0,0,0,.6);z-index: 1}
	#remarkBox>.remarkBox{width: 400px;height: 280px;position: absolute;top: 50%;left: 50%;margin: -140px 0 0 -200px;background: #fff;}
	#remarkBox>.remarkBox>p{margin: 0;padding: 0;padding-left: 10px;box-sizing: border-box;height: 35px;line-height: 35px;background: #ccc}
	#remarkBox>.remarkBox>div{padding: 10px;box-sizing: border-box;width: 100%;position: relative;}
	#remarkBox>.remarkBox>div textarea{box-sizing: border-box;padding: 5px;resize: none;width: 100%;height: 170px}
	#remarkBox>.remarkBox>div .remarkNum{position: absolute;bottom: 15px;right: 20px}
	span.btnX{border-radius: 5px;background: #0e90d2;margin: 0 5px 0;color: #fff;}
	div.rload{width:100%;margin: 10px 0;text-align: center;}
	div.rload>span{color: #000;cursor: pointer;}
	div.rload>span:hover{color: #ccc}
</style>
<template>
	<div>
		<div class="am-g am-margin-top">
			<div id="remarkBox" v-show="remarkBox">
				<div class="remarkBox">
					<p>修改备注</p>
					<div>
						<textarea v-model="remark" maxlength="50"></textarea>
						<span class="remarkNum">{{remark.length}}/50</span>
					</div>
					<div style="text-align: right;">
						<span class="btnX am-btn am-btn-default" @click="preservation()">保存</span>
						<span class="btnX am-btn am-btn-default" @click="remarkBox=false;remark=''">取消</span>
					</div>
				</div>
			</div>
			<div class="am-u-sm-12">
				<a id="exportFileUrl" :href="exportFileUrl" style="display:none"></a>
				<span class="am-btn am-btn-default" @click="exportTable()"><i class="am-icon-plus"></i> 导出文件</span>
				<span class="ech"><input placeholder="请输入姓名进行搜索" v-model="keyword" type="text" style="height:35px;width: 230px;box-sizing: border-box;padding: 0 5px"><span class="am-btn am-btn-default" @click="getDate(0)">查询</span></span>
			</div>
			<div class="table">
				<table>
					<thead>
						<tr>
							<th>ID</th>
							<th>姓名</th>
							<th>性别</th>
							<th>地域</th>
							<th>手机号</th>
							<th>邮箱</th>
							<th>报名时间</th>
							<th>备注</th>
							<th>操作</th>
						</tr>
					</thead>
					<tbody>
						<tr v-for="(itme,i) in items">
							<td v-text="itme.Id"></td>
							<td v-text="itme.Name"></td>
							<td>
								<span v-if="itme.Gener==0">N/A</span>
								<span v-if="itme.Gener==1">女</span>
								<span v-if="itme.Gener==2">男</span>
							</td>
							<td v-text="itme.Regionx"></td>
							<td v-text="itme.Mobile"></td>
							<td v-text="itme.Email"></td>
							<td v-text="setTime(itme.CreatedAt)"></td>
							<td :title="itme.Remark" v-text="itme.Remark==''?'N/A':itme.Remark" style="max-width:240px;overflow:hidden"></td>
							<td>
								<span class="btn" @click="setRemark(itme.Id,i,itme.Remark)">修改备注</span>
								<span class="btn" @click="removeList(itme.Id,i)">删除</span>
							</td>
						</tr>
					</tbody>
				</table>
				<div class="rload" v-if="items.length>=20">
					<span @click="getDate(1)">加载更多</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Time from '../common/time.js';
	import Request from '../common/request.js';
	let Clipboard = require('clipboard');

	let request = new Request();
	let time = new Time();
	let pagesize = 10;
	// let link = 'http://www.supergen.com.cn/newsdetail.html';

	export default {
		name: 'SignUp',
		data() {
			return {
				pId:'',
				pNum:'',
				exportFileUrl:'',
				remark:'',
				remarkBox:false,
				total: 0,
				items:[],
				page:[],
				offset:0,
				keyword:'',
				size: 20,
				token:window.localStorage.getItem("token")
			}
		},
		watch: {
			
		},
		methods: {
			//删除
			removeList:function(id,i){
				var _this = this;
				if(!confirm('确认删除？')){
                    return;
                }
				request.delete({
                    url:'/v1/cms/1113/applications?id='+id,
                    callback(data) {
                    	_this.items.splice(i,1)
                    	console.log(data)
                    }
                })
			},

			//导出表格
			exportTable:function(){
				var _this = this;
				var p ={keyword:_this.keyword}
				window.location.href = 'http://39.108.114.71:9208/v1/cms/1113/applications/export?access_token='+_this.token
			},

			//保存备注
			preservation:function(){
				var _this = this;
				//remark
				var i = _this.pNum;
				var b = {
					id:_this.pId,
					remark:_this.remark
				}

				request.put({
                    url:'/v1/cms/1113/applications',
                    dataType: 'json',
                    contentType: 'application/json',
                    params: JSON.stringify(b),
                    callback(data) {
                    	_this.items[i].Remark = data.Remark;
                    	_this.remarkBox=false;
                    	_this.remark=''
                    	console.log(data)
                    }
                })
			},

			//设置显示时间
			setTime:function(time){
				var t = time.replace('T', " ")
				t = t.replace('+08:00', " ")
				return t
			},

			//设置备注
			setRemark:function(id,i,bz){
				var _this = this;
				_this.pId = id;
				_this.pNum = i;
				_this.remark= bz;
				_this.remarkBox = true;
			},

			//请求数据
			getDate:function(n){
				var _this = this;
				if(n==0){
            		_this.offset=0
            	}else{
            		_this.offset+=20
            	}
            	var p = {
					offset:_this.offset,
					size:_this.size,
					keyword:_this.keyword
				}
                request.get({
                    url:'/v1/cms/1113/applications',
                    params: p,
                    callback(data) {
                    	if(data.length<=0){
                    		_this.offset -=20;
                    		alert('没有更多数据了！')
                    		return;
                    	}
                    	if(n==0){
                    		_this.items = data;
                    		console.log(data)
                    	}else{
                    		_this.items.push(...data)
                    		console.log(data)
                    	}
                    	
                    }
                })
			}
		},

		created() {
			this.getDate(0)
		}
	}
</script>