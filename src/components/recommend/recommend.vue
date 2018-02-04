<template>
	<div class="recommend" ref="recommend">
		<!-- 4-3-008搭建骨架 -->
		<div class="recommend-content">
			<div class="slider-wrapper" v-if="recommends.length">
				<!-- 加了v-if是为了在有数据的时候再去渲染dom，不然会跟slider.vue里面的20ms的定时器冲突，参考4-4 -->
				<!-- 4-4-003 -->
				<slider>
					<!-- 4-4-005 -->
					<div v-for="item in recommends">
						<a :href="item.linkUrl">
							<img :src="item.picUrl">
						</a>
					</div>
				</slider>
			</div>
			<div class="recommend-list">
				<h1 class="list-title">热门歌单推荐</h1>
				<ul></ul>
			</div>
		</div>
	</div>
</template>
<script>
	//4-4-001
	import Slider from "base/slider/slider.vue"
	// 4-3-010调用抓取数据
	import { getRecommend } from "api/recommend"
	//4-3-013
	import { ERR_OK } from "api/config"
	// 4-3-011调用钩子函数去获取数据
	export default{
		data(){
			return {
				recommends:[]//4-4-004
			}
		},
		created(){
			//为了保持钩子函数的简洁，一般把代码封装到methods里面
			//4-3-015,然后控制台查看是否获取到数据，结束4-3
			this._getRecommend()
		},
		methods:{
			//4-3-012
			_getRecommend(){
				getRecommend().then((res)=>{
					//res就是数据里面的json对象
					//4-3-014获取轮播图所需数据
					if(res.code === ERR_OK){
						console.log(res.data.slider)
						//4-4-004 赋值给this.recommends
						this.recommends = res.data.slider
					}
				})
			}
		},
		//4-4-002
		components:{
			Slider
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
			.slider-wrapper
				position:relative
				width:100%
				overflow:hidden
			.recommend-list
				.list-title
					height:65px
					line-height 65px
					text-align:center
					font-size:$font-size-medium
					color:$color-theme
				.item
					display:flex
					box-sizing:border-box
					align-items:center
					padding:0 20px 20px 20px
</style>