<template>
	<div id="home">
		<div>这一页没有什么用，请在左侧菜单选择功能并操作！</div>
	</div>
</template>

<script type="text/javascript">
	import Request from '../common/request.js';

	let request = new Request();
	export default {
		name: 'home',
		data() {
			return {

			}
		},
		created() {
			
		}
	}
</script>
<style scoped>
	#home {
		text-align: center;
		font-size: 36px;
		padding-top: 100px;
	}
</style>