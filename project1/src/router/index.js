import Vue from 'vue'
import VueRouter from 'vue-router'
import Mainpage from '@/components/mainpage.vue'
Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'Mainpage',
      component: Mainpage
    }
  ]
})
