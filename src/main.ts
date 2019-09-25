import Vue from 'vue';

import App from './App.vue';
import store from './store';

import 'vue-material/dist/vue-material.min.css';
import './theme.scss';

Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
