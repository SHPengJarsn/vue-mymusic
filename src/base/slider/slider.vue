<template>
	<div class="slider" ref="slider">
		<div class="slider-group" ref="sliderGroup">
			<slot></slot>
		</div>
		<div class="dots">
			<span class="dot" :class="{active:currentIndex === index}" v-for="(item,index) in dots"></span>
		</div>
	</div>
</template>
<script >
	import BScroll from "better-scroll"
	//slider-08
	import {addClass} from "common/js/dom.js"
	export default{
		// slider-01
		props:{
			loop:{
				//是否可以轮播，默认可以
				type:Boolean,
				default:true
			},
			autoPlay:{
				//自动轮播
				type:Boolean,
				default:true
			},
			interval:{
				//自动轮播的间隔
				type:Number,
				default:4000//默认4秒
			}
		},
		data(){
			return {
				dots:[],
				currentIndex:0
			}
		},
		//slider-02
		mounted(){
			//轮播图放这里
			//保证dom成功渲染要加延时
			setTimeout(()=>{
				//slider-06
				this._setSliderWidth()
				this._initSlider()
			},20)
		},
		//slider-03
		methods:{
			// slider-04横向滚动，设置slider的宽度
			_setSliderWidth(){
				//slider-07
				this.children = this.$refs.sliderGroup.children
				let width = 0
				let sliderWidth = this.$refs.slider.clientWidth
				for(let i=0;i<this.children.length;i++){
					let child = this.children[i]
					addClass(child,"slider-item")
					child.style.width = sliderWidth + "px"
					width += sliderWidth//总的宽度等于子元素的累加
				}
				if (this.loop){
					width += 2*sliderWidth
				}
				this.$refs.sliderGroup.style.width = width + "px"
			},
			//slider-05初始化slider
			_initSlider(){
				//slider-07
				this.slider = new BScroll(this.$refs.slider,{
					scrollX: true,
          			scrollY: false,
          			momentum: false,
          			snap: true,
          			snapLoop: this.loop,
          			snapThreshold: 0.3,
          			snapSpeed: 400
				})
			}
		}
		
	}
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
	@import "~common/stylus/variable"
	.slider
		min-height:1px
		.slider-group
			position:relative
			overflow:hidden
			white-space:nowrap
			.slider-item
				float:left
				box-sizing:border-box
				overflow:hidden
				text-align:center
				a
					display:block
					width:100%
					overflow:hidden
					text-decoration:none
				img
					display:block
					width:100%
		.dots
			position:absolute
			right:0
			left:0
			bottom:12px
			text-align:center
			font-size:0
			.dot
				display:inline-block
				margin:0 4px
				width:8px
				height:8px
				border-radius:50%
				background:$color-text-1
				/*&.active
					width:20px
					border-radius:5px
					background:&color-text-11*/

</style>