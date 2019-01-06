/**
 * Created by mapbar_front on 2019-01-06.
 */
import Home from '../views/Home.vue'
import InfraTest from '../../packages/test/index'
import InfraSinglePicker from '../../packages/single-picker/index'
const components = [
  { path: `/`, name: 'home', component: Home },
  { path: `/about`, name: 'about', component: () => import(/* webpackChunkName: "about" */ '../views/About.vue') },
  { path: `/test`, name: 'InfraTest', component: InfraTest },
  { path: `/singlepicker`, name: 'InfraSinglePicker', component: InfraSinglePicker }
]

export default components
