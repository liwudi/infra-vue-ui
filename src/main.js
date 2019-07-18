import Vue from 'vue';
import App from './App.vue';
import router from './router/router';
import '../dist/iconfont/iconfont.css';

Vue.config.productionTip = false;

/* set root element font-size */
document.documentElement.style.fontSize = document.documentElement.clientWidth / 7.5 + 'px'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
