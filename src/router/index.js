import Vue from "vue"
import Router from "vue-router"
import Rank from "components/rank/rank.vue"//3-2已经为components配置别名
import Recommend from "components/recommend/recommend.vue"
import Search from "components/search/search.vue"
import Singer from "components/singer/singer.vue"
Vue.use(Router)
export default new Router({//3-2export vue-router的实例，然后在main.js引用这个实例
	routes:[
		{path:"/",redirect:"/recommend"},
		{path:"/rank",component:Rank},
		{path:"/recommend",component:Recommend},
		{path:"/search",component:Search},
		{path:"/singer",component:Singer}
	]
})