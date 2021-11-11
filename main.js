import Vue from 'vue'
import App from './App'
import uView from "uview-ui";
import httpInterceptor from '@/common/http.interceptor.js' //网络请求
import constants from '@/common/env/constants.js' //全局常量
Vue.use(uView);
Vue.prototype.$constants = constants //常量挂载
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
  ...App
})
app.$mount()

// 绑定this对象
Vue.prototype.$vm = app
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)
