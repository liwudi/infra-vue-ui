import Vue from 'vue'
import Router from 'vue-router'
import ComponentList from '../pages/component-list/component-list'

Vue.use(Router)

const routes = [
  { path: '/', component: ComponentList }
]
export default new Router({
  // mode: 'history',
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: routes
})
