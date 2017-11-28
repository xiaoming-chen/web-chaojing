<template>
	<div id="article">
		<article class="am-article">
		  <div class="am-article-hd">
		    <h1 class="am-article-title" v-text="title"></h1>
		    <p class="am-article-meta" v-text="ctime"></p>
		  </div>

		  <div class="am-article-bd">
		    <p v-html="content"></p>
		  </div>
		</article>
	</div>
</template>

<script type="text/javascript">
	import Time from '../common/time.js';

	let time = new Time();
	export default {
		name:'article',
		data() {
			return {
				title: '',
				content: '',
				ctime: 0
			}
		},
		created() {
			let detail = window.localStorage.getItem("newsDetail");
			if (!detail) {
				this.$router.go(-1);
				return;
			}

			detail = JSON.parse(detail);

			this.title = detail.Title;
			this.content = detail.Content;
			this.ctime = time.format(detail.Time);
		}
	}
</script>

<style scoped>
	#article {
		padding: 20px;
	}
</style>