<template>
	<div>
		<div class="am-g am-margin-top">
			<div class="am-u-sm-12">
				<button @click="addAD(0)" class="am-btn am-btn-default"><i class="am-icon-plus"></i> 增加广告图(500*200,jpg/png)</button>
				<button @click="addADDesc(1)" v-if="showDescBnt" class="am-btn am-btn-default"><i class="am-icon-plus"></i> 增加带描述广告图(200*150,jpg/png)</button>
			</div>
		</div>
		<hr>
		<ul class="am-list am-margin">
		  <li v-for="(item,index) in items">
		  	<a href="javascript:;" @click="show(item.URL)" class="am-fl"><img :src="item.URL" :alt="item.Desc"/></a>
		  	<div class="am-fr">
		  		<input type="text" v-model="item.Dest" placeholder="请输入链接地址" class="link-pic">
		  		<button @click="save(index)" class="am-btn am-btn-default am-btn-xs"><i class="am-icon-save"></i> 保存修改</button>
		  		<button @click="edit(index)" class="am-btn am-btn-default am-btn-xs"><i class="am-icon-pencil"></i> 修改图片</button>
		  		<button @click="del(index)" class="am-btn am-btn-danger am-btn-xs"><i class="am-icon-trash"></i> 删除</button><br>
		  		<textarea v-if="item.Type === 1" class="desc" v-model="item.Desc"></textarea>
		  	</div>
		  	<div class="am-cf"></div>
		  </li>
		</ul>
		<!-- <div class="am-g">
		  <div class="am-u-sm-4" v-for="item in items">
		    <a href="javascript:;" class="am-thumbnail">
		      <img :src="item.URL" :alt="item.Desc"/>
		    </a>
		    <figcaption class="am-thumbnail-caption">图片标题 #2</figcaption>
		  </div>
		</div> -->
	</div>
</template>

<script type="text/javascript">
	import Request from '../common/request.js';
	import upload from '../common/upload.js';
	import image from '../common/image.js';

	let request = new Request();

	export default {
		name: 'banner',
		data() {
			return {
				items: [],
				showDescBnt: true
			}
		},
		created() {
			let that = this;
			request.get({
				url:'/v1/cms/ads',
				callback(data) {
					that.items.push(...data.ADs);
				}
			});
		},
		watch: {
			items(val) {
				for (let v of val) {
					if (v.Type === 1) {
						this.showDescBnt = false;
						return;
					}
				}
			}
		},
		methods: {
			addADDesc(tp) {
				this.add(tp, function(img) {
					if (img.width !== 500 && img.height !== 150) {
            			alert('图片的尺寸只能是：500*150');
            			return false;
            		}
            		return true;
				});
			},
			addAD(tp) {
				this.add(tp, function(img) {
					if (img.width !== 500 && img.height !== 200) {
            			alert('图片的尺寸只能是：500*200');
            			return false;
            		}
            		return true;
				})
			},
			add(tp, fnSize) {
				let that = this;
				let input = $('<input type="file" class="am-hide">');
                $('body').append(input);
                input.click();

                input.change(function() {
                	if (this.files.length === 0) {
                		return;
                	}

                	let file = this.files[0];
                	var ext = file.name.substring(file.name.lastIndexOf('.') + 1);

                	if (ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg') {
						alert('只能上传 jpg、jpeg、png 格式的图片');
						return;
					}

                	let img = new Image();
                	img.src = window.URL.createObjectURL(file);
                	img.onload = function() {
                		if (!fnSize(this)) {
                			return;
                		}

                		upload(file, function(url) {
	                		that.items.push({URL: url, Desc:'', Type: tp, Dest: ''});
	                		request.post({
	                			url: '/v1/cms/ads',
	                			params: JSON.stringify({
	                				ADs: that.items
	                			}),
	                			contentType:'application/json',
	                			callback() {
	                				alert('增加成功');
	                			}
	                		});
	                		
	                	});
                	}
                });
			},
			save(index) {
				let that = this;
				request.post({
        			url: '/v1/cms/ads',
        			params: JSON.stringify({
        				ADs: that.items
        			}),
        			contentType:'application/json',
        			callback() {
        				alert('保存成功');
        			}
        		});
			},
			edit(index) {
				let that = this;
				let input = $('<input type="file" class="am-hide">');
                $('body').append(input);
                input.click();

                input.change(function() {
                	if (this.files.length === 0) {
                		return;
                	}

                	let file = this.files[0];

                	if (ext !== 'jpg' && ext !== 'png' && ext !== 'jpeg') {
						alert('只能上传 jpg、jpeg、png 格式的图片');
						return;
					}

					let img = new Image();
                	img.src = window.URL.createObjectURL(file);
                	img.onload = function() {
                		if (img.width !== 500 && img.height !== 200) {
	            			alert('图片的尺寸只能是：500*200');
	            			return;
	            		}

	            		upload(file, function(url) {
	                		that.items[index].URL = url;
	                		that.items.splice(index, 1, that.items[index]);
	                		request.post({
	                			url: '/v1/cms/ads',
	                			params: JSON.stringify({
	                				ADs: that.items
	                			}),
	                			contentType:'application/json',
	                			callback() {
	                				alert('修改成功');
	                			}
	                		});
	                		
	                	});
                	}

                	
                });
			},
			del(index) {
				if (!confirm('真的要删除？')) return;

				this.items.splice(index, 1);
				request.post({
        			url: '/v1/cms/ads',
        			params: JSON.stringify({
        				ADs: this.items
        			}),
        			contentType:'application/json',
        			callback() {
        				alert('删除成功');
        			}
        		});
			},
			show(src) {
				image(src);
			}
		}
	}
</script>

<style scoped>
	.am-list a, img {
		width: 200px;
	}

	.link-pic {
		width: 400px;
	    border: 1px solid #ccc;
	    font-size: 14px;
	    padding: 3px;
	}

	.desc {
		margin-top: 10px;
    	width: 100%;
    	height: 120px;
	}
</style>