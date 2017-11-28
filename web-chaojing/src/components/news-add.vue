<template>
	<div id="new-add">
		<div class="am-input-group am-margin-bottom">
		  <span class="am-input-group-label">新闻标题</span>
		  <input type="text" v-model="title" class="am-form-field" placeholder="输入新闻标题">
		</div>
		<VueUEditor ueditorPath="http://apps.bdimg.com/libs/ueditor/1.4.3.1/" @ready="editorobject" :ueditorConfig="ueditorConfig"></VueUEditor>
		<div class="am-margin-top">
			<button type="button" v-on:click="saveAndBack" class="am-btn am-btn-success">保存并回到列表页面</button>
			<button type="button" v-on:click="save" class="am-btn am-btn-success">保存</button>
			<button type="button" v-on:click="cancel" class="am-btn am-btn-default">取消</button>
			<button type="button" v-on:click="reset" class="am-btn am-btn-default">重置</button>
		</div>
	</div>
</template>

<script type="text/javascript">
	import VueUEditor from 'vue-ueditor';
	import Request from '../common/request.js';
	import upload from '../common/upload.js';

	window.UEDITOR_HOME_URL = "http://apps.bdimg.com/libs/ueditor/1.4.3.1/";

	let request = new Request();

	export default {
		name:'newAdd',
		components: {
            VueUEditor
        },
		data() {
			return {
				title: '',
				editor: null,
				requestFun: request.post,
				newsID: '',
				ueditorConfig:{
                    //这里可以选择自己需要的工具按钮名称,此处仅选择如下五个
                    toolbars: [
                        [
                            'Source',
                            'Insertunorderedlist',
                            'Insertorderedlist',
                            'Unlink',
                            'Link',
                            'Bold',
                            'Italic',
                            'Underline',
                            'Fontborder',
                            'Strikethrough',
                            'Forecolor',
                            'Backcolor',
                            'Justifyleft',
                            'Justifycenter',
                            'Justifyright',
                            'Justifyjustify'
                        ]
                    ],
                    //focus时自动清空初始化时的内容
                    autoClearinitialContent: true,
                    //关闭字数统计
                    wordCount: true,
                    // maximumWords:6000,
                    //关闭elementPath
                    elementPathEnabled: false,
                    //默认的编辑区域高度
                    initialFrameHeight: 600,
                    initialFrameWidth: '100%',
                    //更多其他参数，请参考ueditor.config.js中的配置项
                    // serverUrl: ''
                    serverUrl: '',
                    autoHeightEnabled: false,
                }
			}
		},
		mounted() {
			this.registerUI();
			// let that = this;
			// let editorjs =  document.getElementById('editorScriptTag');
   //          let editorconf = document.getElementById("configScriptTag");

   //          if (flag >= 2) {
   //          	that.registerUI();
   //          } else {
   //          	editorconf.onload = function() {
   //          		flag++;
   //          		that.registerUI();
   //          	}
   //          	editorjs.onload = function() {
   //          		flag++;
   //      			that.registerUI();
   //      		}
   //          }
   //          
		},
		methods: {
			editorobject(editor) {
				this.editor = editor;
				this.modify();
			},
			modify() {
				if (this.$route.query.edit) {
					let newsEdit = window.localStorage.getItem('newsEdit');
					if (!newsEdit) return;

					let detail = JSON.parse(newsEdit);

					this.title = detail.Title;
					this.editor.setContent(detail.Content);
					this.requestFun = request.put;
					this.newsID = detail.ID;
				}
			},
			registerUI() {
				let that = this;
				UE.registerUI('button', function(editor, uiName) {
                    //创建一个button
                    return new UE.ui.Button({
                        //按钮的名字
                        name: uiName,
                        //提示
                        title: '单图上传' ,
                        //添加额外样式，指定icon图标，这里默认使用一个重复的icon
                        cssRules:'background-position: -380px 0px;',
                        //点击时执行的命令
                        onclick: function() {
                            let input = $('<input type="file" class="am-hide" accept="image/*">');
                            $('body').append(input);
                            input.click();

                            input.change(function() {
                            	if (this.files.length === 0) {
                            		return;
                            	}

                            	let file = this.files[0];

                            	upload(file, function(url) {
                            		that.editor.execCommand('insertimage', {
                                        src: url,
                                        sytle: 'max-width:70%;',
                                    });
                            	});
                            });
                        }
                    });
                });
			},
			saveAndBack() {
				if (this.title.length === 0) {
					alert('标题不能为空');
					return;
				}
				let content = this.editor.getContent();
				if (content.length === 0) {
					alert('内容不能为空');
					return;
				}
					
				let that = this;
				this.requestFun({
					url:'/v1/cms/news',
					params: JSON.stringify({
						ID: this.newsID,
						Title: this.title,
						Content: content
					}),
					contentType: 'applcation/json',
					callback() {
						alert('操作成功');
						that.$router.go(-1);
					}
				});
			},
			save() {
				if (this.title.length === 0) {
					alert('标题不能为空');
					return;
				}
				let content = this.editor.getContent();
				if (content.length === 0) {
					alert('内容不能为空');
					return;
				}
				
				this.requestFun({
					url:'/v1/cms/news',
					params: JSON.stringify({
						ID: this.newsID,
						Title: this.title,
						Content: content
					}),
					contentType: 'applcation/json',
					callback() {
						alert('操作成功');
					}
				});
			},
			cancel() {
				this.$router.go(-1);
			},
			reset() {
				location.reload();
			}
		}
	}
</script>

<style scoped>
	#new-add {
		padding: 20px;
	}
</style>