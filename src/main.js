import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router/router'
import store from './store/store'
//import axios from 'axios'
//import './style/common.scss' // 全局公用样式

let start = function () {
  Vue.config.productionTip = false
  Vue.use(ElementUI);
  new Vue({
    router,
    store,
    render: h => h(App)
  }).$mount('#app');


  // axios.get('./baseUrl.json').then(res => {
  //   Vue.config.productionTip = false
  //   Vue.prototype.BASE_URL = res.data.BASE_URL
  //   Vue.use(ElementUI);
  //   new Vue({
  //     router,
  //     store,
  //     render: h => h(App)
  //   }).$mount('#app');
  // })
}

start()