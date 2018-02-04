// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import "babel-polyfill"//3-1转译es6的api，写在最前面，引入开发依赖
import Vue from 'vue'
import App from './App'
// import router from './router'
import fastclick from "fastclick"//3-1引入依赖

Vue.config.productionTip = false

//下面这一行代码要去配置build/webpack.base.conf.js，找到resolve/alias(别名)
import "common/stylus/index.styl"

fastclick.attach(document.body)//3-1解决移动端点击事件300ms延迟



/* eslint-disable no-new */
new Vue({
  el: '#app',//把el即元素挂载到#app上
  // router,
  components: { App },
  template: '<App/>'
})
