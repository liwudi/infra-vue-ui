import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import '../dist/iconfont/iconfont.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
