<template>
	<div>
		<div class="am-g am-margin-top">
			<div class="am-u-sm-12">
				<router-link to="/news/add" class="am-btn am-btn-default"><i class="am-icon-plus"></i> 增加新闻</router-link>
			</div>
		</div>
		<hr>
		<div class="am-g">
	        <div class="am-u-sm-12">
	            <ul class="am-list admin-content-task">
	                <li v-for="(item,index) in items">
	                  <div class="admin-task-meta" v-text="'发布时间：'+formatTime(item.Time)"></div>
	                  <div class="admin-task-bd">
	                  	<a href="javascript:;" v-text="item.Title" @click="view(item)"></a>
	                  </div>
	                  <div class="am-cf">
	                    <div class="am-btn-toolbar am-fl">
	                      <div class="am-btn-group am-btn-group-sm">
	                        <!-- <button type="button" class="am-btn am-btn-default"><span class="am-icon-check"></span></button> -->
	                        <button type="button" title="修改" @click="edit(item)" class="am-btn am-btn-default">
	                        	<span class="am-icon-pencil"></span>
	                        </button>
	                        <button type="button" title="删除" @click="del(index)" class="am-btn am-btn-default">
	                        	<span class="am-icon-times"></span>
	                        </button>
	                      </div>
	                    </div>
	                    <div class="am-input-group am-input-group-sm am-fl am-u-sm-4">
						  <input type="text" class="am-form-field" :id="'link_'+item.ID" :value="'http://www.supergen.com.cn/newsdetail.html#'+item.ID">
						  <span class="am-input-group-btn">
					        <button class="am-btn am-btn-default" type="button" @click="copy($event, item.ID)" :id="'btn_'+item.ID" :data-clipboard-target="'#link_'+item.ID">复制</button>
					      </span>
						</div>
	                  </div>
	                </li>
	            </ul>
	            <hr>
	            <div class="am-cf">
	              <span>共 {{total}} 条记录</span>
	              <div class="am-fr">
	                <ul class="am-pagination">
	                  <li :class="{'am-disabled': $route.query.p == 1}">
	                  	<router-link :to="{path:'/news',query:{p: parseInt($route.query.p) - 1}}">上一页</router-link>
	                  </li>
	                  <li v-for="pp in page" :class="{'am-active':$route.query.p == pp}">
	                  	<router-link :to="{path:'/news',query:{p:pp}}">{{pp}}</router-link>
	                  </li>
	                  <li :class="{'am-disabled': $route.query.p == count}">
	                  	<router-link :to="{path:'/news',query:{p: parseInt($route.query.p) + 1}}">下一页</router-link>
	                  </li>
	                </ul>
	              </div>
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
		name: 'news',
		data() {
			return {
				total: 0,
				items:[],
				page:[],
				count: 0
			}
		},
		created() {
			this.load();
		},
		watch: {
			'$route'(to, from) {
				this.load();
			}
		},
		methods: {
			formatTime(t) {
				return time.format(t);
			},
			load() {
				let that = this;
				request.get({
					url:'/v1/cms/news',
					params: {
						page: parseInt(this.$route.query.p),
						per_page: pagesize
					},
					callback(data) {
						that.total = data.Total;
						that.items.splice(0);
						that.page.splice(0);
						that.items.push(...data.News);
						that.count = parseInt(that.total / pagesize) + (that.total % pagesize > 0 ? 1 : 0);
						that.setPage();
					}
				});
				
			},
			copy(evn, id) {
				var clipboard = new Clipboard('#btn_'+id);
              	clipboard.on('success', function(e) {
              		alert('复制成功!');
               		e.clearSelection();
                });
			},
			setPage() {
				let p = parseInt(this.$route.query.p);

				let i = p - 5;
		        let c = p + 5;

		        i = i < 1 ? 1 : i;
		        c = c > this.count ? this.count : c;

		        for (; i <= c; i++) {
		        	this.page.push(i);
		        }
			},
			view(item) {
				window.localStorage.setItem("newsDetail", JSON.stringify(item));
				this.$router.push('/news/view');
			},
			del(index) {
				if (!confirm('真的要删除？')) return;

				let that = this;
				console.log(this.items[index])
				let id = this.items[index].ID;
				request.delete({
					url:'/v1/cms/news?id='+id,
					callback() {
						that.total--;
						that.items.splice(index, 1);
						alert('删除成功！');
					}
				});
			},
			edit(item) {
				window.localStorage.setItem("newsEdit", JSON.stringify(item));
				this.$router.push('/news/add?edit=true');
			}
		}
	}
</script>