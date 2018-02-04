<template>
	<div id="app">
		<!-- hello world 测试stylus用的-->
		<m-header></m-header>
	</div>
</template>
<script>
	import MHeader from "./components/m-header/m-header.vue"//3-1
	// import MHeader from "components/m-header/m-header.vue"//3-1这种写法要配置别名，配置后仍然报错。。。

	export default{
		components:{
			MHeader
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
</style>
