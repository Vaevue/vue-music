import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import subapi from '_js/subapi'
import '_js/vant'
import 'amfe-flexible/index.js'
import '@/assets/css/common.css'
Vue.config.productionTip = false
Vue.prototype.axios = subapi.getAjax
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
