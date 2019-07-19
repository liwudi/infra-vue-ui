import Vue from 'vue';
import Router from 'vue-router';
import ComponentList from '../pages/component-list/component-list';
import UploadPage from '../pages/Upload/UploadPage';
import InputList from '../pages/InputList/index';

Vue.use(Router);

const routes = [
  { path: '/', component: ComponentList },
  { path: '/upload', component: UploadPage },
  { path: '/inputList', component: InputList }
];
export default new Router({
  // mode: 'history',
  mode: 'hash',
  // base: process.env.BASE_URL,
  routes: routes
});
