//4-3-001因为在jsonp.js里面已经使用export default function jsonp，所以这里调用的时候用的是jsonp而不是{jsonp}
import jsonp from "common/js/jsonp.js"
//4-3-004引入config.js里面的变量
import {commonParams,options} from "./config.js"
//4-3-002抓取推荐数据，目的是要在组件recommend里面使用
export function getRecommend(){
	const url = "https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg"//这个是摘自项目源码的，qq音乐网站上的地址已经变更
	// const url = "https://c.y.qq.com/splcloud/fcgi-bin/p.fcg"//这是新的
	// 既然调用封装好的jsonp，则要弄清楚data是什么
	// data是该js文件的Headers里的Query String Parameters,要对相同的参数进行封装，于是创建了api/config.js去配置共同的参数
	//4-3-005
	const data = Object.assign({},commonParams,{
		platform:"h5",//来自h5平台
		uin:0,//登录的qq账号
		needNewCode:1
	})
	//4-3-006，获取了url,data,options，所以就调用封装好的jsonp方法
	return jsonp(url,data,options)
}
//4-3-007去recommend.vue