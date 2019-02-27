import Vue from 'vue';
import App from './App.vue';
import router from './router.js';
import store from './store/index.js';
import http from './utils/http';
import './assets/styles/reset.less';
import 'nprogress/nprogress.css';
// 让浏览器console里面不出现一个生产的提示
// 赋值给vue的原型，vue的实例对象就可以直接使用；
Vue.prototype.$http = http;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
