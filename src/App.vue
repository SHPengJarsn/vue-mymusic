<template>
	<div id="app">
		<!-- hello world 测试stylus用的-->
		<m-header></m-header>
		<tab></tab>
		<router-view></router-view><!-- 3-2 -->
	</div>
</template>
<script>
	// import MHeader from "./components/m-header/m-header.vue"//3-1
	import MHeader from "components/m-header/m-header.vue"
	import Tab from "components/tab/tab.vue"
	export default{
		components:{
			MHeader,
			Tab
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
</style>
