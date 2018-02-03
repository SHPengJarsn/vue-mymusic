// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import router from './router'

Vue.config.productionTip = false

//下面这一行代码要去配置build/webpack.base.conf.js，找到resolve/alias(别名)
import "common/stylus/index.styl"


/* eslint-disable no-new */
new Vue({
  el: '#app',//把el即元素挂载到#app上
  // router,
  components: { App },
  template: '<App/>'
})
