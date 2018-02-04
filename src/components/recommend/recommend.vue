<template>
	<div class="recommend">
		<!-- 4-3-008搭建骨架 -->
		<div class="recommend-content">
			<div class="slider-wrapper"></div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>
<script>
	// 4-3-010调用抓取数据
	import { getRecommend } from "api/recommend"
	//4-3-013
	import { ERR_OK } from "api/config"
	// 4-3-011调用钩子函数去获取数据
	export default{
		created(){
			//为了保持钩子函数的简洁，一般把代码封装到methods里面
			//4-3-015,然后控制台查看是否获取到数据
			this._getRecommend()
		},
		methods:{
			//4-3-012
			_getRecommend(){
				getRecommend().then((res)=>{
					//res就是数据里面的json对象
					//4-3-014
					if(res.code === ERR_OK){
						console.log(res.data)
					}
				})
			}
		}
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	/*4-3-009 搭建骨架的样式*/
	@import "~common/stylus/variable"
	.recommend
		position:fixed
		width:100%
		top:88px
		bottom:0
		.recommend-content
			height:100%
			overflow:hidden
			.recommend-list
				.list-title
					height:65px
					line-height 65px
					text-align:center
					font-size:$font-size-medium
					color:$color-theme

</style>