import Vue from 'vue'
import App from './App'
import router from './router/routes'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  render: h=>h(App)
})