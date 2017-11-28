<template>
	<div id="login">
		<div class="am-g">
		  <div class="am-u-lg-6 am-u-md-8 am-u-sm-centered">
		    <h1 style="text-align:center;margin-top:20px;">登录</h1>
		    <hr>
		    <!-- <div class="am-btn-group">
		      <a href="#" class="am-btn am-btn-secondary am-btn-sm"><i class="am-icon-github am-icon-sm"></i> Github</a>
		      <a href="#" class="am-btn am-btn-success am-btn-sm"><i class="am-icon-google-plus-square am-icon-sm"></i> Google+</a>
		      <a href="#" class="am-btn am-btn-primary am-btn-sm"><i class="am-icon-stack-overflow am-icon-sm"></i> stackOverflow</a>
		    </div> -->

		    <form method="post" class="am-form">
		      <label for="email">用户名:</label>
		      <input type="text" v-model="username">
		      <br>
		      <label for="password">密码:</label>
		      <input type="password" @keyup.enter="login" v-model="password">
		      <br>
		      <!-- <label for="remember-me">
		        <input id="remember-me" type="checkbox">
		        记住密码
		      </label> -->
		      <br />
		      <div class="am-cf">
		        <input type="button" @click="login" value="登 录" class="am-btn am-btn-primary am-btn-sm am-fl">
		        <!-- <input type="submit" name="" value="忘记密码 ^_^? " class="am-btn am-btn-default am-btn-sm am-fr"> -->
		      </div>
		    </form>
		  </div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import Request from '../common/request.js';

	let request = new Request();
	export default {
		name: 'login',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			login() {
				if (this.username.length === 0) {
					alert('用户名不能为空');
					return;
				}

				if(this.password.length === 0) {
					alert('密码不能为空');
					return;
				}

				let that = this;
				request.post({
					url:'/v1/cms/authorize',
					params: {
						username: this.username,
						password: this.password
					},
					callback(data) {
						window.localStorage.setItem("token", data.Token);
						that.$router.push('/home');
					}
				})
			}
		}
	}
</script>

<style scoped>
	#login {
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 9999;
		background-color: #fff;
	}
</style>