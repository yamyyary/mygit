import Vue from 'vue'
import Router from 'vue-router'
import daohang from '@/components/daohang.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'daohang',
      component: daohang
    }
  ]
})
