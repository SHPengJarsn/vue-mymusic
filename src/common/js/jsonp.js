//4-2封装jsonp
import originJSONP from "jsonp"

export default function jsonp(url,data,option){
//这里的url是一个纯净的地址，所有的query都是由data来拼接到url上的，所以要创建一个拼接的函数
url += (url.indexOf("?") < 0 ? "?":"&") + param(data)//判断url里面如果没有问号的话，拼接上一个问号
return new Promise((resolve,reject)=>{
	//Promise成功则调用resolve,失败则调用reject
		originJSONP(url,option,(err,data)=>{
			if(!err){
				resolve(data)//把后端返回的数据resolve出去
			}else{
				reject(err)
			}
		})
})
}
function param(data){
	let url = ""
	for(var k in data){
		let value = data[k] !== undefined ? data[k] : "";//判断传入的是否是空的
		url += `&$(k)=${encodeURIComponent(value)}`//拼接url
	}
	return url ? url.substring(1) : ""//如果url存在的话就把第一个&去掉，没有则返回空，在调用的时候再重新添加
}